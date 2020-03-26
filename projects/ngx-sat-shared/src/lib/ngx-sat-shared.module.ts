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

@NgModule({
  declarations: [NgxSatSharedComponent, TestComponent, ScrollAbleTableComponent],
  imports: [
    BrowserModule,
    NxButtonModule,
    ExternalScrollbarModule,
    NxTableModule,
    NxIconModule,
    NxLinkModule
  ],
  exports: [
    NgxSatSharedComponent, 
    TestComponent, 
    ScrollAbleTableComponent]
})
export class NgxSatSharedModule { }
