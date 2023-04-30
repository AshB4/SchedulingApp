package com.availability.ja.repository;

import com.availability.ja.model.PracticeArea;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PracticeAreaRepository extends CrudRepository<PracticeArea,Long> {
    @Query("select f.practiceAreaID from PracticeArea f where f.practiceArea = :practiceArea")
    Long findByPracticeArea(@Param("practiceArea")String practiceArea);
}
