package com.company.сontroller;

import com.company.model.User;
import com.company.service.serviceImpl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserServiceImpl userServiceImpl;

    public UserController(UserServiceImpl userServiceImpl) {
        this.userServiceImpl = userServiceImpl;
    }

    @PostMapping("/create")
    public String create(@RequestBody User user) {
        userServiceImpl.create(user);
        return "redirect:/user/read" + user.getId();
    }

    @GetMapping("read/{id}")
    public User read(@PathVariable int id) {
        return userServiceImpl.readById(id);
    }

    @GetMapping("read")
    public List<User> read() {
        return userServiceImpl.getAll();
    }
}
