package com.smnas.backend.repository;

import com.smnas.backend.entity.LessonDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LessonDateRepository extends JpaRepository<LessonDate, Long> {
}
