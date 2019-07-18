import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryResolveGuard implements CanActivate, CanActivateChild {
  public canActivate() {
    // tslint:disable-next-line: no-console
    console.log('QueryResolveGuard.canActivate');
    return of(true);
  }
  public canActivateChild() {
    // tslint:disable-next-line: no-console
    console.log('QueryResolveGuard.canActivateChild');
    return of(true);
  }
}
