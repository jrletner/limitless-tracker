import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-exercise-stop-watch',
  imports: [DatePipe],
  templateUrl: './exercise-stop-watch.component.html',
  styleUrl: './exercise-stop-watch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseStopWatchComponent implements AfterViewInit, OnDestroy {
  get debugOutput() {
    console.log('[StopWatchComponent] "debugOutput" binding');
    return 'InfoMessage Component Debug Output';
  }
  elapsedTime = 0;
  logs: { date: Date; elapsedTime: number }[] = [];
  isRunning = false;
  private timerId: any;
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  constructor() {
    console.log('Constructor called: Component is being created.');
  }

  ngAfterViewInit(): void {
    console.log('ngOnInit called: Component initialized.');
    // Example: Initialize elapsed time or fetch data
    this.elapsedTime = 0;
  }

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerId = setInterval(() => {
        console.log('Elapsed time: ', this.elapsedTime / 1000);
        this.elapsedTime += 1000;
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

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    console.log('ngOnDestroy called: Component destroyed and timer cleared');
  }
}
