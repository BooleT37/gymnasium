package ru.levin.mail;


import java.io.File;

public class MailImage {
    private File file;
    private String cid;

    public MailImage(File file, String cid) {
        this.file = file;
        this.cid = cid;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }
}
