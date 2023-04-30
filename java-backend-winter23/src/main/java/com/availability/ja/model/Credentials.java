package com.availability.ja.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Credentials")
@NoArgsConstructor
@Data
public class Credentials implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="CredentialsID")
  private Long CredentialsID;


  @Column(name="email")
  private String email;

  @Column(name="Pword")
  private String Pword;
  @Column(name="iv")
  private byte[] iv;
  @Column(name="jkey")
  private byte[] jkey;
  }
