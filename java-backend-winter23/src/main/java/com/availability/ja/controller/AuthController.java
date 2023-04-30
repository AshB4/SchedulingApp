package com.availability.ja.controller;

import com.availability.ja.rest.CredentialsRequest;
import com.availability.ja.rest.TokenResponse;
import com.availability.ja.service.JwtTokenService;
import com.availability.ja.model.Credentials;
import com.availability.ja.repository.CredentialsRepository;
import com.availability.ja.repository.PasswordEnDe;
import com.availability.ja.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/authenticate")
public class AuthController {
    @Autowired private AuthenticationManager authenticationManager;

    @Autowired private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private JwtTokenService jwtUtil;

    @Autowired  private CredentialsRepository credentialRepository;

    @PostMapping(value ="/validate",consumes= APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<TokenResponse> authentication(@RequestBody CredentialsRequest request) throws Exception {

        TokenResponse response = new TokenResponse();


        authenticate(request);

        UserDetails userDetails = jwtUserDetailsService.loadUserByEmail(request.getEmail());


        response.setToken(jwtUtil.generateToken(userDetails));

        return ResponseEntity.ok(response);

    }
    private void authenticate(CredentialsRequest request) throws Exception {

        try {
            Optional<Credentials> ret=credentialRepository.findByEmail(request.getEmail());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), PasswordEnDe.encrypt("AES/CBC/PKCS5Padding",request.getPword(), new SecretKeySpec(ret.get().getJkey(),"AES"), (IvParameterSpec)PasswordEnDe.getIV(ret.get().getIv()))));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

    }
}
