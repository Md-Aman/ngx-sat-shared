import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSatSharedModule } from 'projects/ngx-sat-shared/src/lib/ngx-sat-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSatSharedModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
