package ru.levin.orderManagers;

import ru.levin.dao.SouvenirDao;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Souvenir;
import ru.levin.mail.MailHelper;
import ru.levin.mail.MailImage;
import ru.levin.model.SouvenirOrder;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Named
public class SouvenirOrderManager {
    @Inject private SouvenirDao souvenirDao;
    @Inject private MailHelper mailHelper;

    private String getMailText(String souvenirName, Long souvenirId, String fio, String phone, String photoSrc) {
        String imageText = photoSrc != null ? String.format("<b>Фото:</b><br/><img src=\"cid:%s\" style=\"max-width: 640px; max-height: 480px\"></img><br/>", photoSrc) : "";
        return String.format(
                "<h1>Новый заказ на сувенир</h1><br/>" +
                        "<b>Название сувенира</b>: %s<br/>" +
                        imageText +
                        "<b>Id сувенира</b>: %d<br/>" +
                        "<b>ФИО заказчика</b>: %s<br/>" +
                        "<b>Телефон заказчика</b>: %s",
                souvenirName, souvenirId, fio, phone);
    }

    public void placeOrder(SouvenirOrder order) throws EntityNotFoundException, IOException {

        Long souvenirID = order.getSouvenir().getId();
        Souvenir souvenir = souvenirDao.getById(souvenirID);

        String subject = String.format("Новый заказ на сувенир '%s'", souvenir.getName());
        String souvenirPhotoName = order.getSouvenir().getPhotoName();
        if (souvenirPhotoName != null) {
            URL url = this.getClass().getClassLoader().getResource("static/images/photos/souvenirs/" + souvenirPhotoName);
            if (url == null)
                throw new IOException(String.format("Can't find photoName for photoName %s", souvenirPhotoName));
            File file = null;
            try {
                file = new File(url.toURI());
            } catch (URISyntaxException e) {
                file = new File(url.getPath());
            } finally {
                List<MailImage> imageList = new ArrayList<>();
                if (file == null)
                    throw new IOException(String.format("Can't find file for url %s", url.toString()));
                imageList.add(new MailImage(file, file.getName()));
                mailHelper.sendMailToAllSubscribedAdmins(this.getMailText(souvenir.getName(), souvenirID, order.getFio(), order.getPhone(), file.getName()), subject, true, imageList);
            }
        } else {
            mailHelper.sendMailToAllSubscribedAdmins(this.getMailText(souvenir.getName(), souvenirID, order.getFio(), order.getPhone(), null), subject);
        }
    }
}
