package com.example.MyOKR.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MyOKR.model.Organization;
import com.example.MyOKR.repository.OrganizationRepo;
@Service
public class OrganizationService {
@Autowired
private OrganizationRepo repo;
	public List<Organization> getAll() {
		return repo.findAll();
	}
	public Organization add(Organization org) {
		// TODO Auto-generated method stub
		return repo.save(org);
	}
	public Organization update(Organization org) {
		// TODO Auto-generated method stub
		return repo.save(org);
	}
	public void deleteOrg (int id) {
		repo.deleteById(id);
	}
	public Organization getById(int id) {
		return repo.findById(id).orElse(null);
	}
	

}
