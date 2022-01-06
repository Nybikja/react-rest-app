package com.company.service.serviceImpl;

import com.company.model.User;
import com.company.repository.UserRepository;
import com.company.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository  userRepository;

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User readById(int id) {
        return userRepository.findById(id).orElseThrow(
        () -> new EntityNotFoundException("User with id " + id + " not found"));
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

    @Override
    public void delete(int id) {
        userRepository.delete(readById(id));
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
