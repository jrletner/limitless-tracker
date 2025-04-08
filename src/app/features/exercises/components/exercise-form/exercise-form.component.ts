import { AfterViewInit, Component, ElementRef, inject, ViewChild, } from '@angular/core';
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

  // name: string = '';
  // duration: number = 0;

    // TODO: use ViewChild to bring in #form as a signal
    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
    @ViewChild('form') form?: ElementRef<HTMLFormElement>

 // TODO: use AfterViewInit
 ngAfterViewInit() {
  // adding an event listener to the form (if needed)
  this.form.nativeElement.addEventListener('submit', (event) => {
  });

}

  addExercise(name: string, duration: number) {
    this.exerciseService.addExercise(name, duration);
    this.form?.nativeElement.reset();
  }

  resetForm() {
    this.form?.nativeElement.reset();
  }
}