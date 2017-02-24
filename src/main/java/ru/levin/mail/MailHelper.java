package ru.levin.mail;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import ru.levin.dao.AdminDao;
import ru.levin.entities.Admin;

import javax.inject.Inject;
import javax.inject.Named;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

@Named
public class MailHelper {
    @Inject
    private AdminDao adminDao;
    @Inject private JavaMailSender javaMailSender;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Value("${mail.address}")
    private String mailAddress;

    public void sendMailToAllSubscribedAdmins(String text, String subject, boolean isMultipart, List<MailImage> images) {
        List<Admin> admins = adminDao.getAll();
        for (Admin admin : admins) {
            if (!admin.isSubscribed())
                continue;
            String emailTo = admin.getEmail();
            if (emailTo == null || emailTo.isEmpty())
                continue;
            MimeMessage mail = javaMailSender.createMimeMessage();
            try {
                MimeMessageHelper helper = new MimeMessageHelper(mail, isMultipart, "UTF-8");
                helper.setTo(emailTo);
                helper.setReplyTo(mailAddress);
                helper.setFrom(mailAddress);
                helper.setSubject(subject);
                helper.setText(text, true);
                if (images != null)
                    for (MailImage image : images)
                        helper.addInline(image.getCid(), image.getFile());
            } catch (MessagingException e) {
                logger.warn(e.getMessage());
            }
            javaMailSender.send(mail);
        }
    }

    public void sendMailToAllSubscribedAdmins(String text, String subject) {
        this.sendMailToAllSubscribedAdmins(text, subject, false, null);
    }
}
