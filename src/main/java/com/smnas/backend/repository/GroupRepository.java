package com.smnas.backend.repository;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Schedule;
import com.smnas.backend.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query("SELECT s FROM Schedule s WHERE s.group.id = :id")
    List<Schedule> findSchedule(Long id);
    @Query("SELECT g.students FROM Group g WHERE g.id = :id")
    Page<Student> findStudents(Long id, Pageable pageable);
}
