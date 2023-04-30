package com.availability.ja.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "DevCenter")
@NoArgsConstructor
@Data
public class DevCenter implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="DevCenterID")
  private Long DevCenterID;


  @Column(name="DevCenter")
  private String DevCenter;

  @Column(name="regionID")
  private Long regionID;

}
