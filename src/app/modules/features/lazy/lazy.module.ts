import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import * as containers from './containers';

const routes: Route[] = [
  {
    path: '',
    component: containers.LazyComponent,
    children: [
      {
        path: 'child',
        loadChildren: () => import('./lazy.module').then((m) => m.LazyModule),
      },
    ],
  },
];

@NgModule({
  declarations: [Object.values(containers)],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
