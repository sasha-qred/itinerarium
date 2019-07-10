import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpMockService } from '@shared/http-mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentTimeResolver implements Resolve<string> {
  constructor(private http: HttpMockService) {}

  public resolve(): Observable<string> {
    return this.http.getCurrentDate();
  }
}
