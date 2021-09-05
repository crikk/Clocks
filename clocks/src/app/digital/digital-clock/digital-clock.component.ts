import { Component } from '@angular/core';
import { ClockSyncService } from 'src/app/clock-sync.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(private clockService: ClockSyncService) {
    // intialize clock value
    let current = clockService.getDate();
    this.hours = current.getHours();
    this.minutes = current.getMinutes();
    this.seconds = current.getSeconds();

    this.listenForClockUpdates();
    }

  listenForClockUpdates() {
    this.clockService.timeResetEvent.subscribe((date) => {
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
    })
  }

  addMinute() {
    this.clockService.addMinute();
  }

  addHour() {
    this.clockService.addHour();
  }

  subtractMinute() {
    this.clockService.subtractMinute();
  }

  subtractHour() {
    this.clockService.subtractHour();
  }

}
