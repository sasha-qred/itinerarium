import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as components from './components';

const sharedComponents = [components.NavigationMenuComponent];

@NgModule({
  declarations: [Object.values(components)],
  exports: [Object.values(sharedComponents)],
  imports: [CommonModule, RouterModule],
})
export class NavigationModule {}
