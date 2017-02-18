package ru.levin.orderManagers;

import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ru.levin.mail.MailHelper;
import ru.levin.mail.MailImage;
import ru.levin.model.GraduateOrder;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Named
public class GraduateOrderManager {
    @Inject
    private MailHelper mailHelper;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private String valueOrHyphen(String str) {
        return str == null || str.isEmpty() ? "-" : str;
    }
    private String getMailText(GraduateOrder order, String photoSrc) {
        String imageText = photoSrc != null ? String.format("<b>Фото:</b><br/><img src=\"cid:%s\" style=\"max-width: 640px; max-height: 480px\"></img><br/>", photoSrc) : "";
        return String.format("<h1>Новый заказ на добавление выпускника:</h1><br/>" +
                "<b>ФИО:</b> %s<br/>" +
                imageText +
                "<b>Дата рождения:</b> %s<br/>" +
                "<b>Год выпуска:</b> %s<br/>" +
                "<b>Класс:</b> %s<br/>" +
                "<b>Любимые предметы:</b> %s<br/>" +
                "<b>Достижения:</b> %s<br/>" +
                "<b>ВКонтакте:</b> %s<br/>" +
                "<b>Facebook:</b> %s<br/>",
                valueOrHyphen(order.getFio()), valueOrHyphen(order.getBirthDate()),
                valueOrHyphen(order.getGraduateYear()), valueOrHyphen(order.getGraduateClass()),
                valueOrHyphen(order.getFavouriteSubjects()), valueOrHyphen(order.getAchievements()),
                valueOrHyphen(order.getVkLink()), valueOrHyphen(order.getFacebookLink()));
    }

    public void placeOrder(GraduateOrder order) {
        String subject = "Новая заявка на добавление выпускника";
        String photoBase64 = order.getPhoto();
        if (photoBase64 != null) {
            String fileExtension = order.getPhotoName().substring(order.getPhotoName().lastIndexOf(".") + 1);
            String fileName = "Temp." + fileExtension;
            String pathname = "src/main/resources/static/images/temp/" + fileName;
            String imageDataBytes = photoBase64.substring(photoBase64.indexOf(",") + 1);
            byte[] imageByte= Base64.decodeBase64(imageDataBytes);
            FileOutputStream fos = null;
            File outputFile = new File(pathname);
            try {
                fos = new FileOutputStream(outputFile);
            } catch (FileNotFoundException e) {
                logger.warn(String.format("Can't create file with pathname %s ", pathname));
            }
            try {
                assert fos != null;
                fos.write(imageByte);
                fos.close();
            } catch (IOException e) {
                logger.warn(String.format("Can't write to file with pathname %s ", pathname));
            }
            List<MailImage> imageList = new ArrayList<>();
            imageList.add(new MailImage(outputFile, outputFile.getName()));
            try {
                mailHelper.sendMailToFirstAdmin(getMailText(order, outputFile.getName()), subject, true, imageList);
            } catch (Exception e) {
                logger.warn("Coudn't send a message to admin. Message is:");
                logger.warn(e.getMessage());
            } finally {
                if (!outputFile.delete()) {
                    logger.warn(String.format("Couldn't delete file %s", pathname));
                }
            }
        } else {
            mailHelper.sendMailToFirstAdmin(getMailText(order, null), subject);
        }
    }
}
