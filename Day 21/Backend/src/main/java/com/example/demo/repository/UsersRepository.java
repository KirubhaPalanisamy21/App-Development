package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Users;

import jakarta.transaction.Transactional;

import java.util.List;

public interface UsersRepository extends JpaRepository<Users, Integer> {
	Optional<Users> findByEmail(String email);

	@Transactional
	@Modifying
	@Query(value = "insert into contact (id,email,message,name,phone,subject) values(?,?,?,?,?,?)", nativeQuery = true)
	void contact(int id, String email, String message, String name, String phone, String subject);

	@Query(value = "select count(email) from contact", nativeQuery = true)
	int getcontactid();
}
