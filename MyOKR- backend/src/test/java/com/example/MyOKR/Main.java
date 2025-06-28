package com.example.MyOKR;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.MyOKR")
@EnableJpaRepositories("com.example.MyOKR.repository")
@EntityScan("com.example.MyOKR.model")
public class Main {
	public static void main(String args[]) {
		SpringApplication.run(Main.class,args);
	}

}
