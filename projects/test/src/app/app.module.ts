import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { TestTableComponent } from './test-table/test-table.component';
import { ExternalScrollbarModule } from './shared/external-scrollbar/external-scrollbar.module';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxTableModule } from '@allianz/ngx-ndbx/table';
import { NgxSatSharedModule } from 'projects/ngx-sat-shared/src/lib/ngx-sat-shared.module';
import { TableModule } from 'projects/ngx-sat-shared/src/lib/table/table.module';

import { NxPaginationModule } from '@allianz/ngx-ndbx/pagination';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { PaginationModule } from 'projects/ngx-sat-shared/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSatSharedModule,
    TableModule,
    NxButtonModule,
    ExternalScrollbarModule,
    NxIconModule,
    NxLinkModule,
    NxTableModule,

    NxFormfieldModule, 
    NxPaginationModule, 
    NxDropdownModule,
    ReactiveFormsModule,
    NxGridModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
