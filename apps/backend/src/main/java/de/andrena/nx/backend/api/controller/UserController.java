package de.andrena.nx.backend.api.controller;

import de.andrena.nx.backend.api.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/user")
public class UserController {

  @GetMapping(value = "/current", produces = "application/json")
  public User getCurrentUser() {
    System.out.println("Some Change 1");
    return new User("01", "admin");
  }
}
