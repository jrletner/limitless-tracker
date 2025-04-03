import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-stop-watch',
  standalone: true,
  templateUrl: './exercise-stop-watch.component.html',
  imports: [DatePipe],
  styleUrls: ['./exercise-stop-watch.component.css'],
})
export class ExerciseStopWatchComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Constructor called: Component is being created.');
  }

  elapsedTime = 0;
  logs: { date: Date; elapsedTime: number }[] = [];
  isRunning = false;
  private timerId: any;

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerId = setInterval(() => {
        console.log('Elapsed time: ', this.elapsedTime / 1000);
        this.elapsedTime += 1000; // Increment by 1 second
      }, 1000);
    }
  }

  stopStopwatch() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timerId);
      this.timerId = null;
      const stopTime = new Date();
      this.logs.push({ date: stopTime, elapsedTime: this.elapsedTime });
      this.elapsedTime = 0;
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit called: Component initialized.');
    // Example: Initialize elapsed time or fetch data
  }
  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    console.log('ngOnDestroy called: Component destroyed and timer cleared.');
  }
}
