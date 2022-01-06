package com.company.service;

import com.company.model.User;

import java.util.List;

public interface UserService {
    User create(User user);
    User readById(int id);
    User update(User user);
    void delete(int id);
    List<User> getAll();
}
