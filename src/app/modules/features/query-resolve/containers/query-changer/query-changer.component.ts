import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locale } from '@shared/http-mock';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-query-changer',
  templateUrl: './query-changer.component.html',
  styleUrls: ['./query-changer.component.scss'],
})
export class QueryChangerComponent {
  public currentTime$: Observable<string>;
  public availableLocales: Locale[] = ['de', 'en', 'ru', 'zh_cn'];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentTime$ = this.route.data.pipe(pluck('currentLocaleTime'));
  }

  public onLocaleChange(locale: Locale) {
    this.router.navigate([], {
      queryParams: {
        locale,
      },
    });
  }
}
