package ru.levin.admin.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import ru.levin.HeadAdmin;
import ru.levin.dao.AdminDao;
import ru.levin.entities.Admin;

import javax.inject.Inject;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin/settings")
public class AdminSettingsController {
    @Inject private AdminDao adminDao;

    @Inject private ObjectMapper jacksonObjectMapper;
    @Inject private HeadAdmin headAdmin;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("")
    public ModelAndView index(Principal principal) {
        Map<String, Object> model = new HashMap<>();
        String debugEnv = System.getenv().get("DEBUG_MODE");
        Boolean isDebug = debugEnv != null && debugEnv.equals("TRUE");
        model.put("debug", isDebug);

        Map<String, Object> clientModel = new HashMap<>();
        List<Admin> admins = adminDao.getAll();
        String currentAdminLogin = principal.getName();
        String headAdminLogin = headAdmin.get().getLogin();
        if (!currentAdminLogin.equals(headAdminLogin))
            admins = admins.stream().filter(admin -> !admin.getLogin().equals(headAdminLogin)).collect(Collectors.toList());
        clientModel.put("admins", admins);
        clientModel.put("login", currentAdminLogin);

        try {
            String clientModelJson = jacksonObjectMapper.writeValueAsString(clientModel);
            model.put("clientModelJson", clientModelJson);
        } catch (JsonProcessingException e) {
            logger.error(e.getMessage());
        }
        return new ModelAndView("admin/settings", model);
    }
}
