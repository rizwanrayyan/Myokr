package com.example.MyOKR.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.MyOKR.model.Department;
import com.example.MyOKR.model.Team;
import com.example.MyOKR.model.TeamAssign;
import com.example.MyOKR.model.Users;
import com.example.MyOKR.repository.DepartmentRepo;


@Service
public class DepartmentService {
@Autowired
private DepartmentRepo repo;
@Autowired
private UserService userService;
@Autowired
private TeamService teamService;
public List<Department> getAll(){
	return repo.findAll();
}
public Department add(Department dept) {
	// TODO Auto-generated method stub
	return repo.save(dept);
}
public Department getById(int id) {
	return repo.findById(id).orElse(null);
}
public void delete(int id) {
	repo.deleteById(id);
	
}
public BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

public void assignTeam(TeamAssign tr) {
	
	Department dept=this.getById(tr.getDepartmentId());
	Team team=new Team();
	team.setName(tr.getTeamName());
	team.setDepartment(dept);
	team=teamService.add(team);
	Users user = new Users();
	user.setUsername(tr.getUsername());
	user.setPass(encoder.encode(tr.getPass()));
	user.setRole("TEAM_ADMIN");
	userService.register(user);
	
}
}
