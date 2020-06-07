import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  template: `<span id="time">{{timeService.time | async | date: 'short'}}</span>`
})
export class AppComponent {

  constructor(public timeService: TimeService) { }

}
