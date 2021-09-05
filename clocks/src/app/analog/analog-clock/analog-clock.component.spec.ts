import { ClockSyncService } from './../../clock-sync.service';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { AnalogClockComponent } from './analog-clock.component';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let service: ClockSyncService;
  let fixture: ComponentFixture<AnalogClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ClockSyncService],
      declarations: [ AnalogClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockComponent);
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

  })
});
