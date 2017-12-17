package ru.levin.controllers;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.levin.admin.tables.FolderPathsForTables;

import javax.inject.Inject;
import java.io.IOException;

@Controller
public class PhotosController extends StaticFilesController {
    @Inject
    private FolderPathsForTables folderPathsForTables;

    @Value("${static.directory}")
    private String staticDirectory;

    @PostMapping("admin/photos/{tableName}")
    public ResponseEntity<Void> uploadPhoto(
            @PathVariable String tableName,
            @RequestParam("name") String name,
            @RequestParam("photo") MultipartFile photo) throws IOException {
        return this.uploadFile(folderPathsForTables.getPhotoPath(tableName), name, photo);
    }

    @DeleteMapping("admin/photos/{tableName}")
    public ResponseEntity<?> deletePhoto(@PathVariable String tableName, @RequestBody DeleteFileRequest request) {
        return this.deleteFile(folderPathsForTables.getPhotoPath(tableName) + request.name);
    }
}
