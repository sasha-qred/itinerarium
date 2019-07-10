import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import * as containers from './containers';
import { CurrentTimeResolver } from './resolvers';

const routes: Route[] = [
  {
    path: '',
    component: containers.ResolvedDataComponent,
    resolve: {
      currentTime: CurrentTimeResolver,
    },
  },
  {
    path: 'snapshot',
    component: containers.ResolvedDataSnapshotComponent,
    resolve: {
      currentTime: CurrentTimeResolver,
    },
  },
];

@NgModule({
  declarations: [Object.values(containers)],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResolvedRoutingDataModule {}
