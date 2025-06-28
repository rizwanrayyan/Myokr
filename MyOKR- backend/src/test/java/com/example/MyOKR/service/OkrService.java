package com.example.MyOKR.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MyOKR.model.OKR;
import com.example.MyOKR.model.OkrAssign;
import com.example.MyOKR.model.Team;
import com.example.MyOKR.model.Users;
import com.example.MyOKR.repository.OkrRepo;
import com.example.MyOKR.repository.TeamRepo;
import com.example.MyOKR.repository.UserRepo;

@Service
public class OkrService {
@Autowired
private OkrRepo repo;
@Autowired
private UserRepo userRepo;
@Autowired
private TeamRepo teamRepo;
public OKR save(OkrAssign okr) {
    Team team = teamRepo.findById(okr.getTeamId())
            .orElseThrow(() -> new RuntimeException("Team not found"));

    Users user = userRepo.findById(okr.getAssigneeId())
            .orElseThrow(() -> new RuntimeException("User not found"));

    OKR okr1 = new OKR();
    okr1.setTitle(okr.getTitle());
    okr1.setDescription(okr.getDescription());
    okr1.setTeam(team);
    okr1.setAssignee(user);

    return repo.save(okr1);

}
}
