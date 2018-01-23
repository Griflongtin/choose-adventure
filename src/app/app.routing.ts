import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PlaceComponent } from './place/place.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
     path: 'map',
     component: MapComponent
   },
  {
    path: 'place',
    component: PlaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
