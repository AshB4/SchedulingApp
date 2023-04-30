package com.availability.ja.repository;

import com.availability.ja.model.DevCenter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeZoneRepository extends CrudRepository<DevCenter,Long> {
    @Query("select f.TimeZoneID from TimeZone f where f.TimeZone = :TimeZone")
    Long findByTimeZone(@Param("TimeZone")String TimeZone);
}