import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { ScrollAbleTableComponent } from './scroll-able-table/scroll-able-table.component';
import { TestComponent } from './test/test.component';
import { ExternalScrollbarModule } from './modules/external-scrollbar/external-scrollbar.module';
import { SyncScrollModule } from './modules/sync-scroll/sync-scroll.module';

import { NxTableModule } from '@allianz/ngx-ndbx/table';

@NgModule({
  declarations: [
    ScrollAbleTableComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NxFormfieldModule,
    NxInputModule,
    ExternalScrollbarModule,
    SyncScrollModule,
    NxTableModule

  ],
  exports: [
    ScrollAbleTableComponent,
    TestComponent
  ]
})
export class TableModule { }
