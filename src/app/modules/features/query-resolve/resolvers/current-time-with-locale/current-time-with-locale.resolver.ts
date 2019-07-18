import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpMockService } from '@shared/http-mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentTimeWithLocaleResolver implements Resolve<string> {
  constructor(private http: HttpMockService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<string> {
    return this.http.getCurrentDate(route.queryParams.locale);
  }
}
