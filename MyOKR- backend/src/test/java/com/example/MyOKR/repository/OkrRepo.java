package com.example.MyOKR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MyOKR.model.OKR;

public interface OkrRepo extends JpaRepository<OKR, Integer>{

}
