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

import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';
import { NxMessageModule } from '@allianz/ngx-ndbx/message';
import { NxDropdownModule } from '@allianz/ngx-ndbx/dropdown';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxAccordionModule } from '@allianz/ngx-ndbx/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgxSatSharedComponent, 
    TestComponent, 
    NewCoverNoteCustomerPartnerComponent,
    NewCoverNoteCustomerPartnerCustomerFoundComponent,
    NewCoverNoteCustomerPartnerCustomerNotFoundComponent,
    NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent,
    NewCoverNoteCustomerPartnerContactDetailsComponent,
    NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent,
    NewCoverNoteCustomerPartnerCustomerSearchComponent
  ],
  imports: [
    NxIconModule,
    NxLinkModule,
    NxMessageModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxAccordionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxSatSharedComponent, 
    TestComponent,
    NewCoverNoteCustomerPartnerComponent,
    NewCoverNoteCustomerPartnerCustomerFoundComponent,
    NewCoverNoteCustomerPartnerCustomerNotFoundComponent,
    NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent,
    NewCoverNoteCustomerPartnerContactDetailsComponent,
    NewCoverNoteCustomerPartnerCorrespondenceDetailsComponent,
    NewCoverNoteCustomerPartnerCustomerSearchComponent
  ]
})
export class NgxSatSharedModule { }
