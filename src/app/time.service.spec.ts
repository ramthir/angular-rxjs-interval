import { fakeAsync, TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;
  const UnmockedDate = Date;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return current date async', fakeAsync(() => {
    const currentTime = new UnmockedDate('2018-01-01 01:30:00');
    spyOn(<any>window, 'Date').and.returnValue(currentTime);

    let time;
    service.time$.pipe(take(1)).subscribe(value => time = value);

    expect(time).toEqual(currentTime);
  }));
});
