package com.availability.ja.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@JsonDeserialize
@Data
public class UsersLoginResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty("email")
    private String email;

    @JsonProperty("practiceArea")
    private String practiceArea;

    @JsonProperty("devCenter")
    private String devCenter;

    @JsonProperty("region")
    private String region;

}
