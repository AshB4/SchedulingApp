package com.availability.ja.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "PracticeArea")
@NoArgsConstructor
@JsonDeserialize
@Data
public class PracticeArea implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="practiceAreaID")
  private Long practiceAreaID;

  @Column(name="practiceArea")
  private String practiceArea;
}
