package com.example.MyOKR.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class KeyResults {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String description;

    public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Double getProgress() {
		return progress;
	}

	public void setProgress(Double progress) {
		this.progress = progress;
	}

	public OKR getOkr() {
		return okr;
	}

	public void setOkr(OKR okr) {
		this.okr = okr;
	}

	private Double progress; // range from 0.0 to 100.0

    @ManyToOne
    @JoinColumn(name = "okr_id")
    @JsonIgnore
    private OKR okr;

    // Getters and Setters
}
