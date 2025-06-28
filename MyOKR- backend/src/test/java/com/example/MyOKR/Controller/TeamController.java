package com.example.MyOKR.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.MyOKR.model.OkrAssign;
import com.example.MyOKR.model.Team;
import com.example.MyOKR.model.Users;
import com.example.MyOKR.service.OkrService;
import com.example.MyOKR.service.TeamService;
import com.example.MyOKR.service.UserService;

@RestController
@RequestMapping("/teams")
public class TeamController {
	@Autowired
	private TeamService service;
	@Autowired
	private UserService userService;
	@Autowired
	private OkrService okrService;
	@GetMapping("/team")
	public ResponseEntity<List<Team>> getAll(){
		List<Team> li=service.getAll();
		return new ResponseEntity<>(li,HttpStatus.OK);
	}
	@PostMapping("/team")
	public ResponseEntity<Team> addTeam(@RequestBody Team tr) {
		return new ResponseEntity<>(service.add(tr),HttpStatus.ACCEPTED);
	}
	@PutMapping("/team")
		public ResponseEntity<?> updateTeam(@RequestBody Team tr ){
			Team t=service.getById(tr.getId());
			if(t!=null) {
				return new ResponseEntity<>(service.add(tr),HttpStatus.ACCEPTED);
			}
			return new ResponseEntity<>("No team Found !",HttpStatus.BAD_REQUEST);
		}
	@GetMapping("/team/{id}")
	public ResponseEntity<?> getById(@PathVariable int id){
		Team tr=service.getById(id);
		if(tr!=null) {
		return new ResponseEntity<>(tr,HttpStatus.OK);
	}
		return new ResponseEntity<>("No user found",HttpStatus.BAD_GATEWAY);
	}
	public BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody Users user){
		user.setPass(encoder.encode(user.getPass()));
		user.setRole("user");
		userService.register(user);
		return new ResponseEntity<>("Successfully Added User",HttpStatus.ACCEPTED);
	}

	@PostMapping("/assign")
	public ResponseEntity<?> assignTask(@RequestBody OkrAssign okr){
		return new ResponseEntity<>(okrService.save(okr),HttpStatus.ACCEPTED);
	}
	}


