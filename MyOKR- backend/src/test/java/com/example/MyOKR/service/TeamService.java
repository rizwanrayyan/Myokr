package com.example.MyOKR.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.MyOKR.model.Team;
import com.example.MyOKR.repository.TeamRepo;

@Service
public class TeamService {
@Autowired
private TeamRepo repo;

public List<Team> getAll(){
	return repo.findAll();
}
public Team add(Team tr) {
	// TODO Auto-generated method stub
	return repo.save(tr);
}
public Team getById(int id) {
	// TODO Auto-generated method stub
	return repo.findById(id).orElse(null);
}


}
