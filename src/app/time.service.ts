import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time$: Observable<Date>;

  constructor() {
    this.time$ = interval(60000).pipe(startWith(new Date()), map(tick => new Date()));
  }
}
