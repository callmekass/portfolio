package dev.tylerholm.portfolio.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class GreetingController {

  @GetMapping("/api/greeting")
  public String getMethodName() {
      return "Hello World!";
  }
  
  
}
