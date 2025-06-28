package com.example.MyOKR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MyOKR.model.Department;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {

}
