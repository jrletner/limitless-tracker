import { Component, inject, Input } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { ExerciseStopWatchComponent } from '../exercise-stop-watch/exercise-stop-watch.component';

@Component({
  selector: 'app-exercise-item',
  standalone: true,
  imports: [ExerciseStopWatchComponent],
  templateUrl: './exercise-item.component.html',
  styleUrl: './exercise-item.component.css',
})
export class ExerciseItemComponent {
  @Input() exercise: { name: string; duration: number };
  private exerciseService = inject(ExerciseService);

  removeExercise() {
    this.exerciseService.removeExercise(this.exercise.name);
  }
}
