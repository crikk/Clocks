import { Injectable, Output, EventEmitter } from '@angular/core';

export const ONE_SECOND: number = (1000);
export const ONE_MINUTE: number = (ONE_SECOND * 60);
export const ONE_HOUR: number = (ONE_MINUTE * 60);


@Injectable({
  providedIn: 'root'
})
export class ClockSyncService {

  @Output()
  timeResetEvent: EventEmitter<Date> = new EventEmitter<Date>();

  private _date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.addSecond();
    }, ONE_SECOND);
  }

  getDate(): Date {
    return this._date;
  }

  addSecond() {
    this._date.setTime(this._date.getTime() + ONE_SECOND);
    this.publish();
  }

  addMinute() {
    this._date.setTime(this._date.getTime() + ONE_MINUTE);
    this.publish();
  }

  subtractMinute() {
    this._date.setTime(this._date.getTime() - ONE_MINUTE)
    this.publish();
  }

  addHour() {
    this._date.setTime(this._date.getTime() + ONE_HOUR)
    this.publish();
  }

  subtractHour() {
    this._date.setTime(this._date.getTime() - ONE_HOUR)
    this.publish();
  }

  publish() {
    this.timeResetEvent.emit(this._date);
  }
}
