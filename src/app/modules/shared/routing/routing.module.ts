import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as components from './components';

const SHARED_COMPONENTS = [components.RoutingEventsStatusComponent];

@NgModule({
  declarations: [Object.values(components)],
  exports: [SHARED_COMPONENTS],
  imports: [CommonModule],
})
export class RoutingModule {}
