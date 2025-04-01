import { Component, inject } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent {
  private exerciseService = inject(ExerciseService);

  name: string = '';
  duration: number = 0;

  addExercise() {
    this.exerciseService.addExercise(this.name, this.duration);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.duration = 0;
  }
}