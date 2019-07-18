import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import * as containers from './containers';
import { QueryResolveGuard } from './guards';
import { CurrentTimeWithLocaleResolver } from './resolvers';

const routes: Route[] = [
  {
    path: '',
    canActivate: [QueryResolveGuard],
    canActivateChild: [QueryResolveGuard],
    children: [
      {
        path: '',
        component: containers.QueryChangerComponent,
        resolve: {
          currentLocaleTime: CurrentTimeWithLocaleResolver,
        },
      },
      {
        path: 'rerun-guards',
        component: containers.QueryChangerComponent,
        resolve: {
          currentLocaleTime: CurrentTimeWithLocaleResolver,
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
    ],
  },
];

@NgModule({
  declarations: [Object.values(containers)],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QueryResolveModule {}
