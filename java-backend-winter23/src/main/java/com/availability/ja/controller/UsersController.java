package com.availability.ja.controller;

import com.availability.ja.model.Users;

import com.availability.ja.rest.*;
import com.availability.ja.service.UsersService;

import io.swagger.annotations.ApiOperation;


import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import java.util.ArrayList;

import static org.springframework.http.MediaType.*;

@RestController
@RequestMapping("/users")
@SecurityRequirement(name = "Bearer Authentication")
public class UsersController {

    @Autowired private UsersService usersService;


    @GetMapping(value = "/getUserById", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get User Information", notes = "This method get a user by its id")
    public ResponseEntity<UsersResponse> getUserById(@RequestBody UsersRequest request) {
        return new ResponseEntity<>(usersService.getUserById(request), HttpStatus.OK);
    }

    @PostMapping(value = "/getUserByEmail", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get User Information", notes = "This method get a user by its email")
    public ResponseEntity<UsersResponse> getUserByEmail(@RequestBody UsersRequest request) {
        return new ResponseEntity<>(usersService.getUserByEmail(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getPracticeArea", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get Practice Area Information", notes = "This method gets a users practice area")
    public ResponseEntity<PracticeAreaResponse> getPracticeArea(@RequestBody UsersRequest request) {
        return new ResponseEntity<>(usersService.getPracticeArea(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getUserDevCenter", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get User Information", notes = "This method gets a users Dev Center")
    public ResponseEntity<DevCenterResponse> getUserDevCenter(@RequestBody UsersRequest request) {
        return new ResponseEntity<>(usersService.getDevCenter(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getAllUsers", consumes =ALL_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get All Users", notes = "all users")
    public ResponseEntity<Iterable<Users>> getAllUsers() {
        return new ResponseEntity<>(usersService.getAll(), HttpStatus.OK);
    }
    @PostMapping(value = "/createUser", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Creates new User ", notes = "This method creates a user")
    public  void createUser(@RequestBody UsersRequest request) {
        usersService.createUser(request);
    }

    @PostMapping(value = "/setNewUserCredentials", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Adds information", notes = "This creates credentials")
    public  void setNewUserCredentials(@RequestBody NewUsersLoginRequest request) throws Exception {
        usersService.setUserPassword(request);
    }

    @PostMapping(value = "/setUserCredentials", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Updates User Credentials", notes = "This creates credentials")
    public  void setUserCredentials(@RequestBody CredentialsRequest request) throws Exception {
        usersService.updateUserPassword(request);
    }
    @PutMapping(value = "/updateUserPassword", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "changes credential Information", notes = "Changes user password")
    public  void updateUserPassword(@RequestBody CredentialsRequest request) throws InvalidAlgorithmParameterException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException, InvalidKeySpecException {
        usersService.updateUserPassword(request);
    }
    @PostMapping(value = "/getPracticeAreaAll", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get All in Practice Area ", notes = "all practice areas")

    public ResponseEntity<ArrayList<Users>> getPracticeAreaAll(@RequestBody PracticeAreaRequest request) {
        return new ResponseEntity<>(usersService.getPracticeAreaAll(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getDevCenterAll", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get All in Dev Center ", notes = "all dev centers")

    public ResponseEntity<ArrayList<Users>> getDevCenterAll(@RequestBody DevCenterRequest request) {
        return new ResponseEntity<>(usersService.getDevCenterAll(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getTimeZoneAll", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Get All in Time Zone ", notes = "all time zones")

    public ResponseEntity<ArrayList<Users>> getTimeZoneAll(@RequestBody TimeZoneRequest request) {
        return new ResponseEntity<>(usersService.getTimeZoneAll(request), HttpStatus.OK);
    }

}
