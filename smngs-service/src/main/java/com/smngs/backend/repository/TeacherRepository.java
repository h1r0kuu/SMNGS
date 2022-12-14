package com.smngs.backend.repository;

import com.smngs.backend.entity.Group;
import com.smngs.backend.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    @Query("SELECT g FROM Group g WHERE :id IN (SELECT t.id FROM Group g JOIN g.teachers t)")
    Page<Group> findGroup(Long id, Pageable pageable);

}
