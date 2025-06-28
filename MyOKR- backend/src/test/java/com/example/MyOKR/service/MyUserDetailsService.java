package com.example.MyOKR.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.MyOKR.model.UserPrinciple;
import com.example.MyOKR.model.Users;
import com.example.MyOKR.repository.UserRepo;
@Service
public class MyUserDetailsService implements UserDetailsService{
	@Autowired
	private UserRepo repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Users user=repo.findByUsername(username);
		if(user ==null) {
			System.out.println("User Not Found !");
			throw new UsernameNotFoundException("Unknown User !");
		}
		return new UserPrinciple(user);
	}

}
