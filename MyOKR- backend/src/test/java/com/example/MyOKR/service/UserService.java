package com.example.MyOKR.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.MyOKR.model.Users;
import com.example.MyOKR.repository.UserRepo;

@Service
public class UserService {
@Autowired
private UserRepo repo;
@Autowired
private AuthenticationManager authManager;
@Autowired
private JwtService jwtService;
public void register(Users user) {
	repo.save(user);
}
public Users getUser(int id) {
	return repo.findById(id).orElse(null);
}
public void deleteUser(int id) {
	repo.deleteById(id);
}
public String verify(Users user) {
	Authentication authentication=authManager.authenticate(new UsernamePasswordAuthenticationToken( user.getUsername(),user.getPass()));
	if(authentication.isAuthenticated()) {
		return jwtService.generateToken(user.getUsername(),user.getRole());
	}
	String out=null;
	return out;
}

public String getRole(Users user) {
	Users user1=repo.findByUsername(user.getUsername());
	return user1.getRole();
}
}
