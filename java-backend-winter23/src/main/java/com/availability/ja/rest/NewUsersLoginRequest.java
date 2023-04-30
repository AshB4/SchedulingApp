package com.availability.ja.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import java.io.Serializable;

@NoArgsConstructor
@JsonDeserialize
@Data
public class NewUsersLoginRequest implements Serializable {

    private static final long serialVersionUID = 1L;
    @JsonProperty("email")
    @Valid
    private String email;
    @JsonProperty("Pword")
    @Valid
    private String Pword;
    @JsonProperty("CognitoUserName")
    @Valid
    private String CognitoUserName;
}