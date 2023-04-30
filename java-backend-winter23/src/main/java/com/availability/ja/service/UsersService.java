package com.availability.ja.service;


import com.availability.ja.model.*;
import com.availability.ja.repository.*;
import com.availability.ja.rest.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.*;


@Component
public class UsersService {
    @Autowired private UsersRepository usersRepository;
    @Autowired private PracticeAreaRepository practiceAreaRepository;
    @Autowired private DevCenterRepository devCenterRepository;
    @Autowired private RegionRepository regionRepository;
    @Autowired private CredentialsRepository credentialRepository;
    @Autowired private TimeZoneRepository timeZoneRepository;
    @Autowired private JwtUserDetailsService jwtUserDetailsService;

    private UsersResponse getUsersResponse(Optional<Users> results) {
        UsersResponse response = new UsersResponse();
        if(results.isPresent()){
            Users returnedRow = results.get();
            Optional<PracticeArea> pa_results = practiceAreaRepository.findById(returnedRow.getPracticeAreaID());
            Optional<DevCenter> dc_results = devCenterRepository.findById(returnedRow.getDevCenterID());
            DevCenter row= dc_results.get();
            Optional<Region> r_results = regionRepository.findById(row.getRegionID());
            response.setFullName(returnedRow.getFirstName() + ' ' + returnedRow.getLastName());
            response.setPracticeArea(pa_results.get().getPracticeArea());
            response.setDevCenter(dc_results.get().getDevCenter());
            response.setRegion(r_results.get().getRegion());
        }
        return response;
    }
    public UsersResponse getUserById(UsersRequest request){
        Optional<Users> userID = usersRepository.findByEmail(request.getEmail());
        Optional<Users> results = usersRepository.findById(userID.get().getUserID());
        return getUsersResponse(results);

    }

    public UsersResponse getUserByEmail(UsersRequest request){

        Optional<Users> results = usersRepository.findByEmail(request.getEmail());

        return getUsersResponse(results);
    }
    public PracticeAreaResponse getPracticeArea(UsersRequest request){
        Optional<Users> results = usersRepository.findByEmail(request.getEmail());
        Users returnedRow = results.get();
        Optional<PracticeArea> pa_results = practiceAreaRepository.findById(returnedRow.getPracticeAreaID());
        PracticeAreaResponse response = new PracticeAreaResponse();
        if(pa_results.isPresent()){
            response.setPracticeArea(pa_results.get().getPracticeArea());
        }
        return response;
    }
    public DevCenterResponse getDevCenter(UsersRequest request) {
        Optional<Users> results = usersRepository.findByEmail(request.getEmail());
        Users returnedRow = results.get();
        Optional<DevCenter> dc_results = devCenterRepository.findById(returnedRow.getDevCenterID());
        DevCenterResponse response = new DevCenterResponse();
        if(dc_results.isPresent()){
            response.setDevCenter(dc_results.get().getDevCenter());
        }
        return response;
    }

    public Iterable<Users> getAll(){
        Iterable<Users> results = usersRepository.findAll();
        return results;
    }

    public void createUser(UsersRequest request){
        Optional<Users> userID = usersRepository.findByEmail(request.getEmail());
        usersRepository.updatePracticeAreaID(userID.get().getUserID(),practiceAreaRepository.findByPracticeArea(request.getPracticeArea()));
        usersRepository.updateDevCenterID(userID.get().getUserID(),devCenterRepository.findByDevCenter(request.getDevCenter()));
        usersRepository.updateFirstName(userID.get().getUserID(),request.getFirstName());
        usersRepository.updateLastName(userID.get().getUserID(),request.getLastName());
        usersRepository.updateMiddleName(userID.get().getUserID(),request.getMiddleName());
        usersRepository.updatePhoneNumber(userID.get().getUserID(),request.getPhoneNumber());
        usersRepository.updateGraduated(userID.get().getUserID(),request.isGraduated());
        usersRepository.updateGraduationDate(userID.get().getUserID(),request.getGraduationDate());
        usersRepository.updateIsActive(userID.get().getUserID(),true);
        usersRepository.updateIsAdmin(userID.get().getUserID(),false);
        usersRepository.updateTimeZoneID(userID.get().getUserID(),timeZoneRepository.findByTimeZone(request.getTimeZone()));
    }


    public void setUserPassword(NewUsersLoginRequest request) throws Exception {
        Credentials creds = new Credentials();
        Users create= new Users();
        try{

                if (!jwtUserDetailsService.emailInDB(request.getEmail())){
                    if(jwtUserDetailsService.checkEmailDomain(request.getEmail())){
                        String pass =  request.getPword();
                        SecretKey key = PasswordEnDe.generateKey(128);
                        IvParameterSpec ivParameterSpec = PasswordEnDe.generateIv();
                        String algorithm = "AES/CBC/PKCS5Padding";
                        creds.setIv(ivParameterSpec.getIV());
                        creds.setEmail(request.getEmail());
                        creds.setPword(PasswordEnDe.encrypt(algorithm, pass, key, PasswordEnDe.generateIv()));
                        creds.setJkey(key.getEncoded());
                        credentialRepository.save(creds);

                        create.setCredentialsID(creds.getCredentialsID());
                        create.setCognitoUserName(request.getCognitoUserName());
                        create.setEmail(request.getEmail());
                        usersRepository.save(create);
                    }
                    else{
                        throw new BadCredentialsException("INVALID_CREDENTIALS");
                    }
            }
                else {
                    throw new Exception("Account Already Exist");
                }
        }

        catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        catch (Exception e) {
            throw new Exception("Account Already Exist", e);
        }
    }


    public void updateUserPassword(CredentialsRequest request) throws NoSuchAlgorithmException, InvalidAlgorithmParameterException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, InvalidKeyException, InvalidKeySpecException {

        Optional<Users> results = usersRepository.findByEmail(request.getEmail());
        Optional<Credentials> ret = credentialRepository.findById(results.get().getCredentialsID());
        IvParameterSpec ivParameterSpec = PasswordEnDe.generateIv();
        SecretKey key = PasswordEnDe.generateKey(128);
        String algorithm = "AES/CBC/PKCS5Padding";
        credentialRepository.updateKey(ret.get().getCredentialsID(), key.getEncoded());
        credentialRepository.updateIv(ret.get().getCredentialsID(),ivParameterSpec.getIV());
        credentialRepository.updatePassword(results.get().getCredentialsID(),PasswordEnDe.encrypt(algorithm, request.getPword(), key, ivParameterSpec));
    }
    /**public String decUserPassword(String email) throws NoSuchAlgorithmException, InvalidAlgorithmParameterException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, InvalidKeyException, InvalidKeySpecException, UnsupportedEncodingException {
        Optional<Users> results = usersRepository.findByEmail(email);
        Optional<Credentials> ret = credentialRepository.findById(results.get().getCredentialsID());
        IvParameterSpec ivParameterSpec = PasswordEnDe.getIV(ret.get().getIv());
        String algorithm = "AES/CBC/PKCS5Padding";

       return PasswordEnDe.decrypt(algorithm, ret.get().getPword(), new SecretKeySpec(ret.get().getJkey(),"AES"),ivParameterSpec);
    }*/
    public void setIsAdmin(Long userID, boolean status){
        usersRepository.updateIsAdmin(userID,status);
    }
    public void setIsActive(Long userID, boolean status){
        usersRepository.updateIsActive(userID,status);
    }
    public ArrayList<Users> getPracticeAreaAll(PracticeAreaRequest practiceArea){
        ArrayList<Users> paList =  new ArrayList<>((Collection) getAll());
        ArrayList<Users> rem=new ArrayList<>();
        for(Users x : paList){
            if(!(x.getPracticeAreaID() == practiceAreaRepository.findByPracticeArea(practiceArea.getPracticeArea()))){
                rem.add(x);
            }
        }
        paList.removeAll(rem);
        return paList;
    }
    public ArrayList<Users> getTimeZoneAll(TimeZoneRequest timeZone){
        ArrayList<Users> tzList =  new ArrayList<>((Collection) getAll());
        ArrayList<Users> rem=new ArrayList<>();
        for(Users x : tzList){
            if(Objects.equals(timeZoneRepository.findByTimeZone(timeZone.getTimeZone()), x.getTimeZoneID())){
                rem.add(x);
            }
        }
        return rem;
    }
    public ArrayList<Users> getDevCenterAll(DevCenterRequest devCenter){
        ArrayList<Users> dcList =  new ArrayList<>((Collection) getAll());
        ArrayList<Users> rem=new ArrayList<>();
        for(Users x : dcList){
            if(!(x.getDevCenterID() == devCenterRepository.findByDevCenter(devCenter.getDevCenter()))){
                rem.add(x);
            }
        }
        dcList.removeAll(rem);
        return dcList;
    }

}
