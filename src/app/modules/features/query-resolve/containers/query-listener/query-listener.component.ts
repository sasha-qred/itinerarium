import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpMockService, Locale } from '@shared/http-mock';
import { Observable } from 'rxjs';
import {
  distinctUntilChanged,
  pluck,
  skip,
  startWith,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-query-listener',
  templateUrl: './query-listener.component.html',
  styleUrls: ['./query-listener.component.scss'],
})
export class QueryListenerComponent {
  public currentTime$: Observable<string>;
  public availableLocales: Locale[] = ['de', 'en', 'ru', 'zh_cn'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpMockService,
  ) {
    this.currentTime$ = this.route.queryParams.pipe(
      skip(1),
      pluck('locale'),
      distinctUntilChanged(),
      switchMap((locale) => this.http.getCurrentDate(locale)),
      startWith(this.route.snapshot.data.currentLocaleTime),
    );
  }

  public onLocaleChange(locale: Locale) {
    this.router.navigate([], {
      queryParams: {
        locale,
      },
    });
  }
}
