package com.availability.ja;

import org.jruby.util.log.Logger;
import org.jruby.util.log.LoggerFactory;
import org.springframework.boot.SpringApplication;


@org.springframework.boot.autoconfigure.SpringBootApplication
public class SpringBootApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringBootApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(SpringBootApplication.class, args);
    }

}
