import { NgModule } from '@angular/core';
import { NgxSatSharedComponent } from './ngx-sat-shared.component';
import { TestComponent } from './components/test/test.component';
import { ScrollAbleTableComponent } from './components/scroll-able-table/scroll-able-table.component';


import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { ExternalScrollbarModule } from './modules/external-scrollbar/external-scrollbar.module';
import { NxTableModule } from '@allianz/ngx-ndbx/table';
import { BrowserModule } from '@angular/platform-browser'
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';

import { PaginationComponent } from './components/pagination/pagination.component';
import { NxPaginationModule } from '@allianz/ngx-ndbx/pagination';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';

@NgModule({
  declarations: [NgxSatSharedComponent, TestComponent, ScrollAbleTableComponent, PaginationComponent],
  imports: [
    BrowserModule,
    NxButtonModule,
    ExternalScrollbarModule,
    NxTableModule,
    NxIconModule,
    NxLinkModule,
    NxPaginationModule,
    NxPaginationModule,
    NxFormfieldModule,
    NxDropdownModule,
    ReactiveFormsModule,
    NxGridModule
  ],
  exports: [
    NgxSatSharedComponent,
    TestComponent,
    ScrollAbleTableComponent,
    PaginationComponent]
})
export class NgxSatSharedModule { }
