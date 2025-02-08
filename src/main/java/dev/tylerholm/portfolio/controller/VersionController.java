package dev.tylerholm.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersionController {

    @Autowired
    BuildProperties buildProperties;

    @GetMapping("/api/version")
    public String getVersion() {
        return buildProperties.getVersion();
    }
}