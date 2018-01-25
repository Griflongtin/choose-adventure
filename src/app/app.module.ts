import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PlaceComponent } from './place/place.component';
import { UserService } from './user.service';
import { masterFirebaseConfig } from './api-keys';
import { EditUserComponent } from './edit-user/edit-user.component';
import { IslandOneComponent } from './island-one/island-one.component';
import { IslandTwoComponent } from './island-two/island-two.component';
import { IslandThreeComponent } from './island-three/island-three.component';
import { IslandFourComponent } from './island-four/island-four.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    PlaceComponent,
    EditUserComponent,
    IslandOneComponent,
    IslandTwoComponent,
    IslandThreeComponent,
    IslandFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
