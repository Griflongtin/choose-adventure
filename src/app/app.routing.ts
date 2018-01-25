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
    component: HomeComponent,
  },
  {
     path: 'map/:id',
     component: MapComponent
   },
  {
    path: 'place/:id',
    component: PlaceComponent
  },
  {
    path: 'island-one/:id',
    component: IslandOneComponent
  },
  {
    path: 'island-two/:id',
    component: IslandTwoComponent
  },
  {
    path: 'island-three/:id',
    component: IslandThreeComponent
  },
  {
    path: 'island-four/:id',
    component: IslandFourComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
