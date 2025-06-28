package com.example.MyOKR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MyOKR.model.Team;

public interface TeamRepo extends JpaRepository<Team, Integer> {

}
