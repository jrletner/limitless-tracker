import { Component } from '@angular/core';
import { ExerciseListComponent } from '../features/exercises/components/exercise-list/exercise-list.component';
import { ExerciseStopWatchComponent } from '../features/exercises/components/exercise-stop-watch/exercise-stop-watch.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [ExerciseListComponent, ExerciseStopWatchComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
