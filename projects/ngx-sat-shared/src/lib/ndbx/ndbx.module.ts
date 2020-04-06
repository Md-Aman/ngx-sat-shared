import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ndbx
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxMessageModule } from '@allianz/ngx-ndbx/message';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxAccordionModule } from '@allianz/ngx-ndbx/accordion';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { NxRadioModule } from '@allianz/ngx-ndbx/radio-button';
import { NxRadioToggleModule } from '@allianz/ngx-ndbx/radio-toggle';
import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { NxTableModule } from '@allianz/ngx-ndbx/table';
import { NxPaginationModule } from '@allianz/ngx-ndbx/pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    NxIconModule,
    NxLinkModule,
    NxMessageModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxAccordionModule,
    NxButtonModule,
    NxTableModule,
    NxIconModule,
    NxLinkModule,
    NxInputModule,
    NxGridModule,
    NxRadioModule,
    NxPaginationModule,
    NxPaginationModule,
    NxFormfieldModule,
    NxDropdownModule,
    NxGridModule,
    NxRadioToggleModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    NxIconModule,
    NxLinkModule,
    NxMessageModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxAccordionModule,
    NxButtonModule,
    NxTableModule,
    NxIconModule,
    NxLinkModule,
    NxInputModule,
    NxGridModule,
    NxRadioModule,
    NxPaginationModule,
    NxPaginationModule,
    NxFormfieldModule,
    NxDropdownModule,
    NxGridModule,
    NxRadioToggleModule
  ]
})
export class NdbxModule { }
