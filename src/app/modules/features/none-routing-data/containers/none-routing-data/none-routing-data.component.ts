import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpMockService } from '@shared/http-mock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-none-routing-data',
  templateUrl: './none-routing-data.component.html',
  styleUrls: ['./none-routing-data.component.scss'],
})
export class NoneRoutingDataComponent implements OnInit, OnDestroy {
  public data: string;
  public subscription: Subscription;

  constructor(private http: HttpMockService) {}

  public ngOnInit() {
    // tslint:disable-next-line: rxjs-prefer-async-pipe
    this.subscription = this.http.getCurrentDate().subscribe({
      next: (data) => {
        this.data = data;
      },
    });
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
