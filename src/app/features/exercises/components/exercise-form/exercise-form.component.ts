import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css',
})
export class ExerciseFormComponent {
  private exerciseService = inject(ExerciseService);
  private fb = inject(FormBuilder);

  exerciseForm: FormGroup;

  constructor() {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required]],
      duration: [0, [Validators.required, Validators.min(1)]],
    });
  }

  addExercise() {
    if (this.exerciseForm.valid) {
      const { name, duration } = this.exerciseForm.value;
      this.exerciseService.addExercise(name, duration);
      this.resetForm();
    }
  }

  resetForm() {
    this.exerciseForm.reset({
      name: '',
      duration: 0,
    });
  }
}
