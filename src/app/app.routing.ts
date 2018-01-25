import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PlaceComponent } from './place/place.component';
import { IslandOneComponent } from './island-one/island-one.component';
import { IslandTwoComponent } from './island-two/island-two.component';
import { IslandThreeComponent } from './island-three/island-three.component';
import { IslandFourComponent } from './island-four/island-four.component';


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
  },
  {
    path: 'island-one',
    component: IslandOneComponent
  },
  {
    path: 'island-two',
    component: IslandTwoComponent
  },
  {
    path: 'island-three',
    component: IslandThreeComponent
  },
  {
    path: 'island-four',
    component: IslandFourComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
