package com.example.MyOKR.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyOKR.model.Organization;
import com.example.MyOKR.model.Users;
import com.example.MyOKR.service.OrganizationService;
import com.example.MyOKR.service.UserService;

@RestController
@RequestMapping("/organization")
public class OrganizationController {
@Autowired
private OrganizationService service;
@Autowired
private UserService userService;
@GetMapping("/org")
public ResponseEntity<List<Organization>> getAllOrganization(){
	List<Organization>allorg =service.getAll();
	return new ResponseEntity<>(allorg,HttpStatus.OK);
}
@PostMapping("/org")
public ResponseEntity<?> addOrganization(@RequestBody Organization org){
	try {
		Organization org1=service.add(org);
		return new ResponseEntity<>(org1,HttpStatus.ACCEPTED);
		
	}
	catch (Exception e) {
		// TODO: handle exception
		return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
	}
}
@PutMapping("/org")
public ResponseEntity<?> updateOrganization(@RequestBody Organization org){
	Organization org1=null;
	try {
	org1=service.update(org);
	if(org1!=null) {
	return new ResponseEntity<>("Updated Successfully",HttpStatus.ACCEPTED);
}
	return new ResponseEntity<>("Update Failed",HttpStatus.BAD_REQUEST);
	}
	catch(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
	}
}
@DeleteMapping("/org/{id}")
public ResponseEntity<String> deleteOrganization(@PathVariable int id){
	try {
		Organization org1=service.getById(id);
		if(org1==null) {
			return new ResponseEntity<>("User Not Found",HttpStatus.NOT_FOUND);
		}
		service.deleteOrg(id);
		return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
	}
	catch(Exception e){
		return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
	}
}
public BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody Users user){
		user.setPass(encoder.encode(user.getPass()));
		user.setRole("DEPT_ADMIN");
		userService.register(user);
		return new ResponseEntity<>("Successfully Added User",HttpStatus.ACCEPTED);
	}
	

}
