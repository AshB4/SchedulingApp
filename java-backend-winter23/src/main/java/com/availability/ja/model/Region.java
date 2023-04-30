package com.availability.ja.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Region")
@NoArgsConstructor
@Data
public class Region implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="regionID")
  private Long regionID;


  @Column(name="region")
  private String region;

}
