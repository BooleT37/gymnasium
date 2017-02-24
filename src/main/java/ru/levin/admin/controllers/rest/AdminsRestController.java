package ru.levin.admin.controllers.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.levin.HeadAdmin;
import ru.levin.admin.controllers.rest.exceptions.*;
import ru.levin.admin.controllers.rest.requestBodies.ChangeEmailRequestBody;
import ru.levin.admin.controllers.rest.requestBodies.ChangePasswordRequestBody;
import ru.levin.admin.controllers.rest.requestBodies.NewAdminRequestBody;
import ru.levin.admin.controllers.rest.requestBodies.SetSubscriptionStatusRequestBody;
import ru.levin.controllers.rest.BaseRestController;
import ru.levin.dao.AdminDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Admin;

import javax.inject.Inject;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
@Secured("ROLE_ADMIN")
public class AdminsRestController extends BaseRestController {
    @Inject
    private AdminDao adminDao;
    @Inject
    private BCryptPasswordEncoder bcryptEncoder;
    @Inject
    private HeadAdmin headAdmin;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("")
    public List<Admin> all() {
        return adminDao.getAll();
    }

    @PostMapping("")
    public Admin add(@RequestBody NewAdminRequestBody requestBody) throws BadRequestException, EmailAlreadyInUseException, LoginAlreadyExistsException {
        if (requestBody.getLogin() == null || requestBody.getLogin().isEmpty())
            throw new BadRequestException("Login cannot be empty");
        if (requestBody.getPassword() == null || requestBody.getPassword().isEmpty())
            throw new BadRequestException("Password cannot be empty");
        List<Admin> admins = adminDao.getAll();
        if (!requestBody.getEmail().isEmpty() && admins.stream().anyMatch(admin -> admin.getEmail().toLowerCase().equals(requestBody.getEmail().toLowerCase())))
            throw new EmailAlreadyInUseException("Email is already is use");
        String hashedPassword = bcryptEncoder.encode(requestBody.getPassword());
        Admin newAdmin = new Admin(requestBody.getLogin(), hashedPassword, requestBody.getEmail(), requestBody.getSubscribed());
        try {
            return adminDao.add(newAdmin);
        } catch (EntityAlreadyExistsException e) {
            throw new LoginAlreadyExistsException(e.getMessage());
        }
    }

    @GetMapping("{login}")
    public Admin getByLogin(@PathVariable("login") String login) throws EntityNotFoundException {
        return adminDao.getByLogin(login);
    }

    @PostMapping("setSubscriptionStatus")
    public void setSubscriptionStatus(@RequestBody SetSubscriptionStatusRequestBody requestBody) throws EntityNotFoundException, NoEmailException, BadRequestException {
        String login = requestBody.getLogin();
        boolean status = requestBody.getStatus();
        if (login.equals(headAdmin.get().getLogin()))
            throw new AccessDeniedException("Cannot edit head admin properties");
        Admin admin = adminDao.getByLogin(login);
        if (status && (admin.getEmail() == null || admin.getEmail().isEmpty()))
            throw new NoEmailException("Cannot enable subscription for admin with no email");
        admin.setSubscribed(status);
        adminDao.edit(admin);
    }

    @PostMapping("changePassword")
    public void changePassword(@RequestBody ChangePasswordRequestBody requestBody, Principal principal) throws EntityNotFoundException, WrongPasswordException {
        String currentAdminLogin = principal.getName();
        Admin currentAdmin = adminDao.getByLogin(currentAdminLogin);
        if (!bcryptEncoder.matches(requestBody.getOldPassword(), currentAdmin.getHashedPassword()))
            throw new WrongPasswordException("Passwords do not match");
        String newHashedPassword = bcryptEncoder.encode(requestBody.getNewPassword());
        currentAdmin.setHashedPassword(newHashedPassword);
        adminDao.edit(currentAdmin);
    }

    @PostMapping("changeEmail")
    public void changeEmail(@RequestBody ChangeEmailRequestBody requestBody, Principal principal) throws EntityNotFoundException, EmailAlreadyInUseException {
        String currentAdminLogin = principal.getName();
        Admin currentAdmin = adminDao.getByLogin(currentAdminLogin);
        List<Admin> admins = adminDao.getAll();
        String email = requestBody.getEmail();
        if (!email.isEmpty() && admins.stream().anyMatch(admin -> admin.getEmail() != null && admin.getEmail().toLowerCase().equals(email.toLowerCase())))
            throw new EmailAlreadyInUseException("Email is already is use");
        currentAdmin.setEmail(email);
        adminDao.edit(currentAdmin);
    }

    @PostMapping("deleteEmail")
    public void deleteEmail(Principal principal) throws EntityNotFoundException, EmailAlreadyInUseException {
        String currentAdminLogin = principal.getName();
        Admin currentAdmin = adminDao.getByLogin(currentAdminLogin);
        currentAdmin.setEmail("");
        adminDao.edit(currentAdmin);
    }

    @DeleteMapping("{login}")
    public Admin delete(@PathVariable String login) throws Exception {
        if (login.equals(headAdmin.get().getLogin()))
            throw new AccessDeniedException("Cannot delete head admin entry");
        return adminDao.deleteByLogin(login);
    }
}
