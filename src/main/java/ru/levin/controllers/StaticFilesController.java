package ru.levin.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

abstract class StaticFilesController {
    @Value("${static.directory}")
    private String staticDirectory;

    ResponseEntity<Void> uploadFile(String relativeFolderPath, String name, MultipartFile multipartFile) throws IOException {
        Path path = Paths.get( staticDirectory, relativeFolderPath);
        Path filePath = Paths.get(staticDirectory, relativeFolderPath, name);
        File file = filePath.toFile();
        if (!Files.exists(path)) {
            if (!path.toFile().mkdirs()) {
                throw new InternalError("Невозможно создать путь " + path.toString());
            }
        }
        multipartFile.transferTo(file);
        return ResponseEntity.ok().build();
    }

    ResponseEntity<?> deleteFile(String relativeFilePath) {
        Path path = Paths.get( staticDirectory, relativeFilePath);
        File file = path.toFile();
        if (!file.delete()) {
            return new ResponseEntity<>("Файл " + path.toString() + " не найден", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().build();
    }
}
