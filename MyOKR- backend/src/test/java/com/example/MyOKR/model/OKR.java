package com.example.MyOKR.model;




import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class OKR {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    private String title;
	    private String description;

	    public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public Team getTeam() {
			return team;
		}

		public void setTeam(Team team) {
			this.team = team;
		}

		public Users getAssignee() {
			return assignee;
		}

		public void setAssignee(Users assignee) {
			this.assignee = assignee;
		}

		@ManyToOne
	    @JoinColumn(name = "team_id")
		@JsonIgnore
	    private Team team;

	    @ManyToOne
	    @JoinColumn(name = "assignee_id")
	    @JsonIgnore
	    private Users assignee;

	    // Add this only if KeyResults are ready
	    // @OneToMany(mappedBy = "okr", cascade = CascadeType.ALL)
	    // private List<KeyResult> keyResults;

	    // Getters and Setters
	}



