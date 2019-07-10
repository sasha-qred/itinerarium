import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import * as containers from './containers';

const routes: Route[] = [
  {
    path: '',
    component: containers.NoneRoutingDataComponent,
  },
];

@NgModule({
  declarations: [Object.values(containers)],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NoneRoutingDataModule {}
