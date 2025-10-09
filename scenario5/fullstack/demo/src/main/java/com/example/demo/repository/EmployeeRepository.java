package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.repository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT new com.example.demo.dto.dto.EmployeeDto(e.name, e.department) FROM Employee e WHERE e.salary > :salary")
    List<EmployeeSummaryDto> findHighPaidEmployee(@Param("salary") double salary);
}
