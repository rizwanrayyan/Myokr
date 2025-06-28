package com.example.MyOKR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MyOKR.model.Organization;

public interface OrganizationRepo extends JpaRepository<Organization, Integer> {

}
