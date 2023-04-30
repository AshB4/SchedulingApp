package com.availability.ja.config;

import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public abstract class JwtAuthEntry implements AuthenticationEntryPoint, Serializable {

    private static final long serialVersionUID = 1L;


}
