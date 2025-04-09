import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ExerciseListComponent } from './features/exercises/components/exercise-list/exercise-list.component';
import { ExerciseStopWatchComponent } from './features/exercises/components/exercise-stop-watch/exercise-stop-watch.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    DashboardPageComponent,
    ExerciseListComponent,
    ExerciseStopWatchComponent,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'limitless-tracker';
}
