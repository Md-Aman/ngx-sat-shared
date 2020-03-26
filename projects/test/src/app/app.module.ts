import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSatSharedModule } from 'ngx-sat-shared';
import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { TestTableComponent } from './test-table/test-table.component';
import { ExternalScrollbarModule } from './shared/external-scrollbar/external-scrollbar.module';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxTableModule } from '@allianz/ngx-ndbx/table';

@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSatSharedModule,
    NxButtonModule,
    ExternalScrollbarModule,
    NxIconModule,
    NxLinkModule,
    NxTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
