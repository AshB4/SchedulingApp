package com.availability.ja.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.actuate.audit.AuditEventRepository;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize
@Data
public class AuditResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    private AuditEventRepository auditEventRepository;
}

