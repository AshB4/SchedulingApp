package com.availability.ja.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@JsonDeserialize
@Data
public class TokenResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty("token")
    private String token;
}
