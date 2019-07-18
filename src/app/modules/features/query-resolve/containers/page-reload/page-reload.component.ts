import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locale } from '@shared/http-mock';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-page-reload',
  templateUrl: './page-reload.component.html',
  styleUrls: ['./page-reload.component.scss'],
})
export class PageReloadComponent implements OnInit, OnDestroy {
  public currentTime$: Observable<string>;
  public availableLocales: Locale[] = ['de', 'en', 'ru', 'zh_cn'];
  private onSameUrlNavigation: 'reload' | 'ignore';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentTime$ = this.route.data.pipe(pluck('currentLocaleTime'));
  }

  public ngOnInit() {
    this.onSameUrlNavigation = this.router.onSameUrlNavigation;
    this.router.onSameUrlNavigation = 'reload';
  }

  public onLocaleChange(locale: Locale) {
    this.router.navigate([], {
      queryParams: {
        locale,
      },
    });
  }

  public ngOnDestroy() {
    this.router.onSameUrlNavigation = this.onSameUrlNavigation;
  }
}
