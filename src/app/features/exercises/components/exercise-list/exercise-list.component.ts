import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { ExerciseFormComponent } from '../exercise-form/exercise-form.component';
import { ExerciseItemComponent } from '../exercise-item/exercise-item.component';

@Component({
  selector: 'app-exercise-list',
  imports: [ExerciseItemComponent, ExerciseFormComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseListComponent {
  get debugOutput() {
    console.log('[ExerciseListComponent] "debugOutput" binding');
    return 'InfoMessage Component Debug Output';
  }

  private exerciseService = inject(ExerciseService);

  exercises = this.exerciseService.getExercises();
}
