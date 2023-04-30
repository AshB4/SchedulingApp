package com.availability.ja.service;

import org.springframework.boot.actuate.audit.AuditEventRepository;
import org.springframework.boot.actuate.audit.InMemoryAuditEventRepository;
import org.springframework.boot.actuate.health.Health;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class StatusCodeMapper {

    //@Override
    public Health doHealthCheck() throws Exception {
        // TODO implement some check
        Health.Builder status = Health.up();

        return status.build();

    }
    @Bean
    public AuditEventRepository auditEventRepository() {
        // constructor also takes a default number of items to store in-memory for tuning
        return new InMemoryAuditEventRepository();
    }
}

