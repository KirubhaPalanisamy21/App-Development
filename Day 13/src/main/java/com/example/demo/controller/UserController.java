package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserLogin;
import com.example.demo.service.UserLoginService;


@RestController
public class UserController 
{
	@Autowired
private UserLoginService userLoginService;
@GetMapping("/getlogin")
public List<UserLogin> getLogin(){
	return userLoginService.getLogin();
}
@PostMapping("/postlogin")
public void postLogin(@RequestBody UserLogin ul) {
	userLoginService.postLogin(ul);
}
@DeleteMapping("/dellogin")
public void deleteLogin(@PathVariable int id) {
	userLoginService.deleteLogin(id);
}
@GetMapping("/public")
public String welcome() {
	return "Hello world";
}
@GetMapping("/secure")
public String hello() {
	return "Hello world";
}
	
}
