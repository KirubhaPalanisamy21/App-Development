package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin, Integer> {

}
