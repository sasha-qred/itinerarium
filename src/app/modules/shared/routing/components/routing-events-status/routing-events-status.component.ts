import { Component } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck, scan, switchMap, window } from 'rxjs/operators';

@Component({
  selector: 'routing-events-status',
  templateUrl: './routing-events-status.component.html',
  styleUrls: ['./routing-events-status.component.scss'],
})
export class RoutingEventsStatusComponent {
  public readonly eventsHistory$: Observable<string[]>;

  constructor(router: Router) {
    const events$ = router.events.pipe(
      pluck<Event, string>('constructor', 'name'),
    );

    const scrollEvent$ = events$.pipe(
      filter((eventName) => eventName === 'Scroll'),
    );

    this.eventsHistory$ = events$.pipe(
      window(scrollEvent$),
      switchMap((eventName$) => {
        return eventName$.pipe(
          scan((history, eventName) => [eventName, ...history], []),
        );
      }),
    );
  }
}
