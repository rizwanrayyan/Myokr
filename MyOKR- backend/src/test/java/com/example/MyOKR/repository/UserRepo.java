package com.example.MyOKR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MyOKR.model.Users;

public interface UserRepo extends JpaRepository<Users, Integer>{
	Users findByUsername(String username);

}
