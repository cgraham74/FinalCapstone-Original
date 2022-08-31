package com.techelevator.repository;

import com.techelevator.model.DateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateTimeRepository extends JpaRepository<DateTime, Boolean> {

}
