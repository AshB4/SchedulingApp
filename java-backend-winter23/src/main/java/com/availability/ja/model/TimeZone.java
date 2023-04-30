package com.availability.ja.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TimeZone")
@NoArgsConstructor
@Data
public class TimeZone implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="TimeZoneID")
  private Long TimeZoneID;


  @Column(name="TimeZone")
  private String TimeZone;


}
