import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { ClockSyncService } from 'src/app/clock-sync.service';

import { DigitalClockComponent } from './digital-clock.component';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let service: ClockSyncService;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ClockSyncService],
      declarations: [ DigitalClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ClockSyncService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("listenForClockUpdates", () => {
    it ("should subscribe to the clock service for updates", () => {
      spyOn(service.timeResetEvent, "subscribe");
      component.listenForClockUpdates();
      expect(service.timeResetEvent.subscribe).toHaveBeenCalled();
    })

    it ("should set the time based on the fired event", fakeAsync(() => {
      component.hours = 0;
      component.minutes = 0;
      component.seconds = 0;

      component.listenForClockUpdates();
      service.addHour(); // force event to fire

      // don't really care what time it got set to, so long as it was set to something
      expect(component.hours).not.toBe(0);
      expect(component.minutes).not.toBe(0);
      expect(component.seconds).not.toBe(0);
    }))
  })

  describe("addMinute", () => {
    it ("should call the service method to add a minute to the service", () => {
      spyOn(service, "addMinute");
      component.addMinute();
      expect(service.addMinute).toHaveBeenCalled();
    })
  })

  describe("subtractMinute", () => {
    it ("should call the service method to subtract a minute from the service", () => {
      spyOn(service, "subtractMinute");
      component.subtractMinute();
      expect(service.subtractMinute).toHaveBeenCalled();
    })
  })

  describe("addHour", () => {
    it ("should call the service method to add an hour to the service", () => {
      spyOn(service, "addHour");
      component.addHour();
      expect(service.addHour).toHaveBeenCalled();
    })
  })

  describe("subtractHour", () => {
    it ("should call the service method to subtract an hour to the service", () => {
      spyOn(service, "subtractHour");
      component.subtractHour();
      expect(service.subtractHour).toHaveBeenCalled();
    })
  })

});
