import { Component, inject, Input } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-item',
  imports: [],
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
