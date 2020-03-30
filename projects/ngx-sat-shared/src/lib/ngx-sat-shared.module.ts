import { NgModule } from '@angular/core';
import { NgxSatSharedComponent } from './ngx-sat-shared.component';
import { TestComponent } from './components/test/test.component';
import { NewCoverNoteCustomerPartnerComponent } from './components/customer-partner/new-cover-note-customer-partner.component';
import { NewCoverNoteCustomerPartnerCustomerFoundComponent } from './components/customer-partner/customer-found/new-cover-note-customer-partner-customer-found.component';
import { NewCoverNoteCustomerPartnerCustomerNotFoundComponent } from './components/customer-partner/customer-not-found/new-cover-note-customer-partner-customer-not-found.component';
import { NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent } from './components/customer-partner/incomplete-customer-found/new-cover-note-customer-partner-incomplete-customer-found.component';
import { NewCoverNoteCustomerPartnerContactDetailsComponent } from './components/customer-partner/contact-details/new-cover-note-customer-partner-contact-details.component';
import { NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent } from './components/customer-partner/correspondence-details/new-cover-note-customer-partner-correspondence-details.component';
import { NewCoverNoteCustomerPartnerCustomerSearchComponent } from './components/customer-partner/customer-search/new-cover-note-customer-partner-customer-search.component';
import { ScrollAbleTableComponent } from './components/scroll-able-table/scroll-able-table.component';

import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxMessageModule } from '@allianz/ngx-ndbx/message';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxAccordionModule } from '@allianz/ngx-ndbx/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxButtonModule } from '@allianz/ngx-ndbx/button';
import { ExternalScrollbarModule } from './modules/external-scrollbar/external-scrollbar.module';
import { NxTableModule } from '@allianz/ngx-ndbx/table';
import { BrowserModule } from '@angular/platform-browser'

import { PaginationComponent } from './components/pagination/pagination.component';
import { NxPaginationModule } from '@allianz/ngx-ndbx/pagination';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';

@NgModule({
<<<<<<< HEAD
  declarations: [NgxSatSharedComponent, TestComponent, ScrollAbleTableComponent, PaginationComponent],
=======
  declarations: [
    NgxSatSharedComponent, 
    TestComponent,
    ScrollAbleTableComponent,
    NewCoverNoteCustomerPartnerComponent,
    NewCoverNoteCustomerPartnerCustomerFoundComponent,
    NewCoverNoteCustomerPartnerCustomerNotFoundComponent,
    NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent,
    NewCoverNoteCustomerPartnerContactDetailsComponent,
    NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent,
    NewCoverNoteCustomerPartnerCustomerSearchComponent
  ],
>>>>>>> 3e01098af5d05152667eeb400eb0d0c9864da0fc
  imports: [
    NxIconModule,
    NxLinkModule,
    NxMessageModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxAccordionModule,
    FormsModule,
    ReactiveFormsModule,
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
<<<<<<< HEAD
    NgxSatSharedComponent,
    TestComponent,
    ScrollAbleTableComponent,
    PaginationComponent]
=======
    NgxSatSharedComponent, 
    TestComponent,
    ScrollAbleTableComponent,
    NewCoverNoteCustomerPartnerComponent,
    NewCoverNoteCustomerPartnerCustomerFoundComponent,
    NewCoverNoteCustomerPartnerCustomerNotFoundComponent,
    NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent,
    NewCoverNoteCustomerPartnerContactDetailsComponent,
    NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent,
    NewCoverNoteCustomerPartnerCustomerSearchComponent
  ]
>>>>>>> 3e01098af5d05152667eeb400eb0d0c9864da0fc
})
export class NgxSatSharedModule { }
