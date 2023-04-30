package com.availability.ja.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.*;

import javax.persistence.Column;
import javax.validation.Valid;
import java.io.Serializable;
import java.sql.Date;

@NoArgsConstructor
@JsonDeserialize
@Data
public class UsersRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("practiceArea")
    @Valid
    private String practiceArea;
    @JsonProperty("DevCenter")
    @Valid
    private String DevCenter;
    @JsonProperty("TimeZone")
    @Valid
    private String TimeZone;
    @JsonProperty("firstName")
    @Valid
    private String firstName;
    @JsonProperty("lastName")
    @Valid
    private String lastName;
    @JsonProperty("middleName")
    @Valid
    private String middleName;
    @JsonProperty("email")
    @Valid
    private String email;
    @JsonProperty("phoneNumber")
    @Valid
    private String phoneNumber;
    @JsonProperty("graduated")
    @Valid
    private boolean graduated;
    @JsonProperty("isActive")
    @Valid
    private boolean isActive;
    @JsonProperty("isAdmin")
    @Valid
    private boolean isAdmin;
    @JsonProperty("isManager")
    @Valid
    private boolean isManager;
    @JsonProperty("graduationDate")
    @Valid
    private Date graduationDate;
    @JsonProperty("CognitoUserName")
    @Valid
    private String CognitoUserName;

}