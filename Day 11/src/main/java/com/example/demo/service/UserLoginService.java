package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.UserLogin;
import com.example.demo.repository.UserLoginRepo;

@Service
public class UserLoginService {
	@Autowired
	private UserLoginRepo userLoginRepo;
	public List<UserLogin> getLogin(){
		return userLoginRepo.findAll();
	}
	public void postLogin(UserLogin ul) {
		userLoginRepo.save(ul);
		
	}
	public void deleteLogin(int id) {
		userLoginRepo.deleteById(id);
	}

}