import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ExerciseListComponent } from './features/exercises/components/exercise-list/exercise-list.component';

@Component({
  selector: 'app-root',
  imports: [DashboardPageComponent, ExerciseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'limitless-tracker';
}
