package ru.levin.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.levin.admin.tables.FolderPathsForTables;

import javax.inject.Inject;
import java.io.IOException;

@Controller
public class VideosController extends StaticFilesController {
    @Inject
    private FolderPathsForTables folderPathsForTables;


    @PostMapping("admin/videos/{tableName}")
    public ResponseEntity<Void> uploadVideo(
            @PathVariable String tableName,
            @RequestParam("name") String name,
            @RequestParam("video") MultipartFile video) throws IOException {
        return this.uploadFile(folderPathsForTables.getVideoPath(tableName), name, video);
    }

    @DeleteMapping("admin/videos/{tableName}")
    public ResponseEntity<?> deleteVideo(@PathVariable String tableName, @RequestBody DeleteFileRequest request) {
        return this.deleteFile(folderPathsForTables.getVideoPath(tableName) + request.name);
    }
}
