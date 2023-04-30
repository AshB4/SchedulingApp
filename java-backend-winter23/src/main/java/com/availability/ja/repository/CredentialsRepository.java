package com.availability.ja.repository;

import com.availability.ja.model.Credentials;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface CredentialsRepository extends CrudRepository<Credentials,Long> {
    Optional<Credentials> findByEmail(String email);
    @Modifying
    @Transactional
    @Query("update Credentials E set E.Pword = :Pword where E.CredentialsID = :CredentialsID")
    void updatePassword(@Param("CredentialsID") long CredentialsID, @Param("Pword") String Pword);
    @Modifying
    @Transactional
    @Query("update Credentials E set E.iv = :iv where E.CredentialsID = :CredentialsID")
    void updateIv(@Param("CredentialsID") long CredentialsID, @Param("iv") byte[] iv);
    @Modifying
    @Transactional
    @Query("update Credentials E set E.jkey = :jkey where E.CredentialsID = :CredentialsID")
    void updateKey(@Param("CredentialsID") long CredentialsID, @Param("jkey") byte[] jkey);
}