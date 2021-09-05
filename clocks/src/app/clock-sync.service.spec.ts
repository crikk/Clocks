import { TestBed,tick, fakeAsync } from '@angular/core/testing';
import { ONE_HOUR, ONE_MINUTE } from './clock-sync.service';
import { ClockSyncService } from './clock-sync.service';

describe('ClockSyncService', () => {
  let service: ClockSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("addMinute", () => {
    it ("should add a minute to the date", () => {
      let initial = service.getDate().getTime();
      service.addMinute();
      let updated = service.getDate().getTime();
      expect(updated).toEqual(initial + ONE_MINUTE);
    })

    it ("should publish the updated date", () => {
      spyOn(service, "publish").and.callThrough();
      service.addMinute();
      expect(service.publish).toHaveBeenCalled();
    })
  })

  describe("subtractMinute", () => {
    it ("should subtract a minute from the date", () => {
      let initial = service.getDate().getTime();
      service.subtractMinute();
      let updated = service.getDate().getTime();
      expect(updated).toEqual(initial - ONE_MINUTE);
    })

    it ("should publish the updated date", () => {
      spyOn(service, "publish").and.callThrough();
      service.subtractMinute();
      expect(service.publish).toHaveBeenCalled();
    })
  })


  describe("addHour", () => {
    it ("should add an hour to the date", () => {
      let initial = service.getDate().getTime();
      service.addHour();
      let updated = service.getDate().getTime();
      expect(updated).toEqual(initial + ONE_HOUR);
    })

    it ("should publish the updated date", () => {
      spyOn(service, "publish").and.callThrough();
      service.addHour();
      expect(service.publish).toHaveBeenCalled();
    })
  })

  describe("subtractHour", () => {
    it ("should add a minute to the date", () => {
      let initial = service.getDate().getTime();
      service.subtractHour();
      let updated = service.getDate().getTime();
      expect(updated).toEqual(initial - ONE_HOUR);
    })

    it ("should publish the updated date", () => {
      spyOn(service, "publish").and.callThrough();
      service.addHour();
      expect(service.publish).toHaveBeenCalled();
    })
  })

  describe("publish", () => {
    it('should output the date', fakeAsync(() => {
      let eventFired = false;
      service.timeResetEvent.subscribe(date => {
        eventFired = true;
      })
      service.publish();
      tick();
      expect(eventFired).toBeTruthy();
    }))
  })
});
