package com.ankita.EmployeeManagementProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ankita.EmployeeManagementProject.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee , Integer> {

}
