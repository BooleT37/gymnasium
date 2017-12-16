package ru.levin.controllers;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.levin.admin.tables.FolderPathsForTables;

import javax.inject.Inject;
import java.io.File;
import java.io.IOException;

@Controller
public class VideosController {
    @Inject
    private FolderPathsForTables folderPathsForTables;

    @Value("${static.directory}")
    private String staticDirectory;

    @PostMapping("admin/videos/{tableName}")
    public ResponseEntity<Void> uploadVideo(
            @PathVariable String tableName,
            @RequestParam("name") String name,
            @RequestParam("video") MultipartFile video) throws IOException {
        String path = staticDirectory + folderPathsForTables.getVideoPath(tableName);
        File file = new File(path + "/" + name);
        video.transferTo(file);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("admin/videos/{tableName}")
    public ResponseEntity<?> deleteVideo(@PathVariable String tableName, @RequestBody DeleteFileRequest request) {
        String path = staticDirectory + folderPathsForTables.getVideoPath(tableName);
        File file = new File(path + "/" + request.name);
        if (!file.delete()) {
            return new ResponseEntity<>("Файл " + request.name + " не найден", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().build();
    }
}
