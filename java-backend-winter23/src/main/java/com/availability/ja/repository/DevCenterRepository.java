package com.availability.ja.repository;

import com.availability.ja.model.DevCenter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DevCenterRepository extends CrudRepository<DevCenter,Long> {
    @Query("select f.DevCenterID from DevCenter f where f.DevCenter = :DevCenter")
    Long findByDevCenter(@Param("DevCenter")String DevCenter);

}