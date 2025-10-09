package scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.repository;

import org.hibernate.query.Page;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.dto.WorkoutDto;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.entity.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Long>{
    Page<WorkoutDto> findAll(Pageable pageable);
}
