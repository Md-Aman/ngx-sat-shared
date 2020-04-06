import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { NdbxModule } from '../ndbx/ndbx.module';




@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NdbxModule
  ], 
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
