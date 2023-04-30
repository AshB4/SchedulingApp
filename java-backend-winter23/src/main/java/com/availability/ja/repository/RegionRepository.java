package com.availability.ja.repository;

import com.availability.ja.model.Region;
import com.availability.ja.model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegionRepository extends CrudRepository<Region,Long> {
}