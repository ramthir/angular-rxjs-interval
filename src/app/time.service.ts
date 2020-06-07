import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { interval, Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TimeService implements OnDestroy {

  private readonly timeSub = new BehaviorSubject<Date>(new Date());
  private readonly destroySub = new Subject();

  get time(): Observable<Date> {
    return this.timeSub.asObservable();
  }

  constructor(private readonly zone: NgZone) {
    this.zone.runOutsideAngular(() => interval(60000).pipe(
      map(tick => new Date()),
      takeUntil(this.destroySub)
    ).subscribe(time => this.timeSub.next(time)));
  }

  ngOnDestroy() {
    this.destroySub.next();
    this.destroySub.complete();
  }
}
