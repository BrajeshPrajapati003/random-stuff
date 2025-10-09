package scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkoutDto {
    private String title;
    private String description;
    private int duration;
    private String difficulyLevel;
}
