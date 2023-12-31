package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "name")
	private String name;

	public int getId() {
		return id;
	}

	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Contact(int id, String name, String email, String phone, String subject, String message) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.subject = subject;
		this.message = message;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", subject=" + subject
				+ ", message=" + message + "]";
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Column(name = "email")
	private String email;
	@Column(name = "phone")
	private String phone;
	@Column(name = "subject")
	private String subject;
	@Column(name = "message")
	private String message;
}
