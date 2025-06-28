package com.example.MyOKR.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyOKR.model.Users;
import com.example.MyOKR.service.UserService;



@RestController
@CrossOrigin(origins = "http://localhost:5173") 
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;



@PostMapping("/login")
public ResponseEntity<String> login(@RequestBody Users user){
	user.setRole(userService.getRole(user));
	System.out.println(user.getRole());
	String token=userService.verify(user);
	if(token!=null) {
	return new ResponseEntity<>(token,HttpStatus.OK);
}
	return new ResponseEntity<>("Failed to login",HttpStatus.BAD_REQUEST);
}
@GetMapping("/user/{id}")
public ResponseEntity<Users> getUsers(@PathVariable int id){
	Users user=userService.getUser(id);
	if(user!=null) {
		return new ResponseEntity<>(user,HttpStatus.FOUND);
	}
	return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
	
}
@DeleteMapping("/user/{id}")
public ResponseEntity<String> deleteUser(@PathVariable int id){
	Users user=userService.getUser(id);
	if(user!=null) {
		userService.deleteUser(id);
		return new ResponseEntity<>("Deleted User Successfully",HttpStatus.ACCEPTED);
	}
	return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
}
}
