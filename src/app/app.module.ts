import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NavigationModule } from '@shared/navigation';
import { RoutingModule } from '@shared/routing';
import { AppComponent } from './app.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'none-routing-data',
  },
  {
    path: 'none-routing-data',
    loadChildren: () =>
      import('./modules/features/none-routing-data/index').then(
        (m) => m.NoneRoutingDataModule,
      ),
  },
  {
    path: 'resolved-routing-data',
    loadChildren: () =>
      import('./modules/features/resolved-routing-data/index').then(
        (m) => m.ResolvedRoutingDataModule,
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavigationModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
