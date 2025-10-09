package scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.service;

import java.awt.print.Pageable;

import org.hibernate.query.Page;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.dto.WorkoutDto;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.entity.Workout;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.repository.WorkoutRepository;

@Service
@RequiredArgsConstructor
public class WorkoutService {
    private final WorkoutRepository repo;

    @Transactional
    public WorkoutDto addWorkout(Workout workout){
        Workout saved = repo.save(workout);

        return WorkoutDto.builder()
        .title(saved.getTitle())
        .description(saved.getDescription())
        .duration(saved.getDuration())
        .difficulyLevel(saved.getDifficulyLevel())
        .build();
    }


    public Page<WorkoutDto> getAllWorkouts(Pageable pageable){
        return repo.findAll(pageable)
            .map(workout -> WorkoutDto.builder()
            .title(workout.getTitle())
            .description(workout.getDescription())
            .duration(workout.getDuration())
            .getDifficulyLevel(workout.getDifficulyLevel())
            .build());
    }
}
