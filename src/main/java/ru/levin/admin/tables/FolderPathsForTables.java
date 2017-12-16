package ru.levin.admin.tables;

import javax.inject.Named;
import java.util.HashMap;
import java.util.Map;

@Named
public class FolderPathsForTables {
    private Map<String, String> photosPaths;
    private Map<String, String> videosPaths;

    public FolderPathsForTables() {
        photosPaths = new HashMap<>();
        String defaultPhotosPath = "/photos/";
        photosPaths.put("graduates", defaultPhotosPath + "graduates");
        photosPaths.put("classes", defaultPhotosPath + "classes");
        photosPaths.put("teachers", defaultPhotosPath + "teachers");
        photosPaths.put("administration", defaultPhotosPath + "administration");
        photosPaths.put("souvenirs", defaultPhotosPath + "souvenirs");
        photosPaths.put("history", defaultPhotosPath + "history");
        photosPaths.put("literature_club", defaultPhotosPath + "traditions/literature_club");
        photosPaths.put("sport", defaultPhotosPath + "traditions/sport");
        photosPaths.put("art", defaultPhotosPath + "traditions/art");
        photosPaths.put("science", defaultPhotosPath + "traditions/science");
        photosPaths.put("travel", defaultPhotosPath + "traditions/travel");

        videosPaths = new HashMap<>();
        String defaultVideosPath = "/videos/";
        videosPaths.put("graduates", defaultVideosPath + "graduates");
        videosPaths.put("classes", defaultVideosPath + "classes");
        videosPaths.put("teachers", defaultVideosPath + "teachers");
        videosPaths.put("administration", defaultVideosPath + "administration");
        videosPaths.put("souvenirs", defaultVideosPath + "souvenirs");
        videosPaths.put("history", defaultVideosPath + "history");
        videosPaths.put("literature_club", defaultVideosPath + "traditions/literature_club");
        videosPaths.put("sport", defaultVideosPath + "traditions/sport");
        videosPaths.put("art", defaultVideosPath + "traditions/art");
        videosPaths.put("science", defaultVideosPath + "traditions/science");
        videosPaths.put("travel", defaultVideosPath + "traditions/travel");
    }

    public String getPhotoPath(String tableName) {
        return photosPaths.get(tableName);
    }

    public String getVideoPath(String tableName) {
        return videosPaths.get(tableName);
    }
}
