import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubnauticaComponent } from './subnautica/subnautica.component';
import { SubmarinosComponent } from './subnautica/submarinos/submarinos.component';
import { FormsModule } from '@angular/forms';
import { UnicornioComponent } from './unicornio/unicornio.component';

@NgModule({
  declarations: [
    AppComponent,
    SubnauticaComponent,
    SubmarinosComponent,
    UnicornioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
