import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PlaceComponent } from './place/place.component';
import { InventoryService } from './inventory.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
