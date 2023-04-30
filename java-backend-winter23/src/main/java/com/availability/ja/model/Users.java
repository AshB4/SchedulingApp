package com.availability.ja.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.*;

import javax.persistence.*;

import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "Users")
@NoArgsConstructor
@Data
@JsonDeserialize
public class Users  implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="userID")
  private Long userID;
  @Column(name="CognitoUserName")
  private String CognitoUserName;
  @Column(name="practiceAreaID")
  private Long practiceAreaID;

  @Column(name="DevCenterID")
  private Long DevCenterID;
  @Column(name="TimeZoneID")
  private Long TimeZoneID;
  @Column(name="CredentialsID")
  private Long CredentialsID;

  @Column(name="firstName")
  private String firstName;

  @Column(name="lastName")
  private String lastName;

  @Column(name="middleName")
  private String middleName;

  @Column(name="email")
  private String email;

  @Column(name="phoneNumber")
  private String phoneNumber;

  @Column(name="graduated")
  private boolean graduated;

  @Column(name="graduationDate")
  private Date graduationDate;

  @Column(name="isManager")
  private boolean isManager;

  @Column(name="isAdmin")
  private boolean isAdmin;

  @Column(name="isActive")
  private boolean isActive;

}
