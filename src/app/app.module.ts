import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubnauticaComponent } from './subnautica/subnautica.component';
import { SubmarinosComponent } from './subnautica/submarinos/submarinos.component';

@NgModule({
  declarations: [
    AppComponent,
    SubnauticaComponent,
    SubmarinosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
