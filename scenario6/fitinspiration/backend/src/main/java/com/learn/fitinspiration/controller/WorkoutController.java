package scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.controller;

import java.awt.print.Pageable;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.dto.WorkoutDto;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.entity.Workout;
import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.service.WorkoutService;

@RestController
@RequestMapping("/api/workouts")
@RequiredArgsConstructor
public class WorkoutController {
    private  final WorkoutService service;

    @PostMapping
    public WorkoutDto addWorkout(@RequestParam Workout workout){
        return service.addWorkout(workout);
    }


    @GetMapping
    public Page<WorkoutDto> listWorkouts(@RequestParam(defaultValue="0") int page,
    @RequestParam(defaultValue="5") int size,
    @RequestParam(defaultValue="id") String sortBy){
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).ascending());
        return service.getAllWorkouts(pageable);
    }
}
