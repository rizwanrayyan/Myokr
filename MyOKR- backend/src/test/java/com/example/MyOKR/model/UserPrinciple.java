package com.example.MyOKR.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

public class UserPrinciple implements UserDetails {
    private static final long serialVersionUID = 1L;

    private final Users user;

    public UserPrinciple(Users user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // e.g. role = "ADMIN" → ROLE_ADMIN
        return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
    }

    @Override
    public String getPassword() {
        return user.getPass();
    }

    @Override
    public String getUsername() {
        return user.getUsername();  // or user.getEmail() if you login with email
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // change if you support account expiration
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // change if you lock users
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // change if you expire passwords
    }

    @Override
    public boolean isEnabled() {
        return true; // change if users can be disabled
    }

    public Users getUser() {
        return user;
    }
}
