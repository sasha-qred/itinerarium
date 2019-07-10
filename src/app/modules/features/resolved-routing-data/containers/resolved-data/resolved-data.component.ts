import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-resolved-data',
  templateUrl: './resolved-data.component.html',
  styleUrls: ['./resolved-data.component.scss'],
})
export class ResolvedDataComponent {
  public currentTime$: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.currentTime$ = route.data.pipe(pluck('currentTime'));
  }
}
