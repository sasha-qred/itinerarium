import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, scan } from 'rxjs/operators';

@Component({
  selector: 'routing-events-status',
  templateUrl: './routing-events-status.component.html',
  styleUrls: ['./routing-events-status.component.scss'],
})
export class RoutingEventsStatusComponent {
  public readonly eventsHistory$: Observable<any>;

  constructor(router: Router) {
    this.eventsHistory$ = router.events.pipe(
      pluck('constructor', 'name'),
      scan((history, eventName) => [eventName, ...history], []),
      map((history) => history.slice(0, 3)),
    );
  }
}
