package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.service.UsersService;

@RestController

@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;
    @GetMapping
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable int id) {
        return usersService.getUserById(id);
    }
    @GetMapping("/{email}")
    public Optional<Users> findByUsername(@PathVariable String email) {
    	return usersService.findByUsername(email);
    }
    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersService.createUser(user);
    }
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable int id, @RequestBody Users updatedUser) {
        return usersService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        usersService.deleteUser(id);
    }
}



