import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
} from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { Exercise } from '../../../../shared/services/exercise-item.model';

@Component({
  selector: 'app-exercise-item',
  imports: [],
  templateUrl: './exercise-item.component.html',
  styleUrl: './exercise-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseItemComponent {
  get debugOutput() {
    console.log('[ExerciseItemComponent] "debugOutput" binding');
    return 'InfoMessage Component Debug Output';
  }
  exercise = input<Exercise>();

  private exerciseService = inject(ExerciseService);

  removeExercise() {
    this.exerciseService.removeExercise(this.exercise().name);
  }
}
