import { ClockSyncService } from './../../clock-sync.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent {
  @ViewChild("hourHand") hourHand: ElementRef;
  @ViewChild("minuteHand") minuteHand: ElementRef;
  @ViewChild("secondHand") secondHand: ElementRef;

  constructor(private clockService: ClockSyncService) {
    this.listenForClockUpdates();
    }

  listenForClockUpdates() {
    this.clockService.timeResetEvent.subscribe((date) => {
    /*
    * Full disclosure, the original code and design for the analog clock is based-on / copied-from this article:
    * https://levelup.gitconnected.com/html-css-analog-clock-with-minimal-javascript-9dcf9a16e079
    *
    * My contribution was simply "Angular-izing" it by getting the time from the Service and using the ViewChild variables
    */

      this.hourHand.nativeElement.style.transform = 'rotate(' + (
        date.getHours() * 30 + (Math.floor(date.getMinutes() / 12) * 6)
      ) + 'deg)';

      this.minuteHand.nativeElement.style.transform = 'rotate(' + (
        date.getMinutes() * 6
      ) + 'deg)';

      this.secondHand.nativeElement.style.transform = 'rotate(' + (
        date.getSeconds() * 6
      ) + 'deg)';

    })
  }
}
