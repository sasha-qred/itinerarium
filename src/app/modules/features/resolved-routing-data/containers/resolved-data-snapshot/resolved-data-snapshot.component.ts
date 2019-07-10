import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolved-data-snapshot',
  templateUrl: './resolved-data-snapshot.component.html',
  styleUrls: ['./resolved-data-snapshot.component.scss'],
})
export class ResolvedDataSnapshotComponent {
  public currentTime: string;

  constructor(route: ActivatedRoute) {
    this.currentTime = route.snapshot.data.currentTime;
  }
}
