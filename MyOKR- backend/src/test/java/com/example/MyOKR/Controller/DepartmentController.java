package com.example.MyOKR.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyOKR.model.Department;
import com.example.MyOKR.model.TeamAssign;

import com.example.MyOKR.service.DepartmentService;


@RestController
@RequestMapping("/department")
public class DepartmentController {
	@Autowired
	private DepartmentService service;
	@GetMapping("/dept")
	public ResponseEntity<List<Department>> getAll(){
		List<Department>li= service.getAll();
		return new ResponseEntity<>(li,HttpStatus.OK);
	}
	@PostMapping("/dept")
	public ResponseEntity<Department> addDept(@RequestBody Department dept){
		Department d1=service.add(dept);
		return new ResponseEntity<>(d1,HttpStatus.ACCEPTED);
	}
	@PutMapping("/dept")
	public ResponseEntity<?> updateDept(@RequestBody Department dept){
		Department d=service.getById(dept.getId());
		if(d!=null) {
			return new ResponseEntity<>(service.add(dept),HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>("Unavailable right now !",HttpStatus.BAD_REQUEST);
	}
	@DeleteMapping("/dept/{id}")
	public ResponseEntity<String> deleteDept(@PathVariable int id){
		Department d=service.getById(id);
		if(d!=null) {
			service.delete(id);
			return new ResponseEntity<>("Successfully Deleted",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>("Request Cannot be done !",HttpStatus.BAD_REQUEST);
		
	}

	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody TeamAssign user){
		service.assignTeam(user);
		return new ResponseEntity<>("Successfully Added User",HttpStatus.ACCEPTED);
	}

}
