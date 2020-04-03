import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxInputModule } from '@allianz/ngx-ndbx/input';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, NxFormfieldModule,
    NxInputModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
