package com.availability.ja.rest;

import java.io.Serializable;

public class jwtResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    private final String jwttoken;

    public jwtResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

    public String getToken() {
        return this.jwttoken;
    }
}