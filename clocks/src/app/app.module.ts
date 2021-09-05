import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockSyncService } from './clock-sync.service';
import { DigitalClockComponent } from './digital/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClockSyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
