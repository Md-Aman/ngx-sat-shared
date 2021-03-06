import { NgModule } from '@angular/core';
import { NgxSatSharedComponent } from './ngx-sat-shared.component';
import { CustomerPartnerComponent } from './components/customer-partner/customer-partner.component';
import { CustomerPartnerCustomerFoundComponent } from './components/customer-partner/customer-found/customer-partner-customer-found.component';
import { CustomerPartnerCustomerNotFoundComponent } from './components/customer-partner/customer-not-found/customer-partner-customer-not-found.component';
import { CustomerPartnerIncompleteCustomerFoundComponent } from './components/customer-partner/incomplete-customer-found/customer-partner-incomplete-customer-found.component';
import { CustomerPartnerContactDetailsComponent } from './components/customer-partner/contact-details/customer-partner-contact-details.component';
import { CustomerPartnerCorrespondenceDetailsComponent } from './components/customer-partner/correspondence-details/customer-partner-correspondence-details.component';
import { CustomerPartnerCustomerSearchComponent } from './components/customer-partner/customer-search/customer-partner-customer-search.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NxButtonModule } from '@allianz/ngx-ndbx/button';

import { NxTableModule } from '@allianz/ngx-ndbx/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NxPaginationModule } from '@allianz/ngx-ndbx/pagination';

@NgModule({
  declarations: [
    NgxSatSharedComponent, 
    CustomerPartnerComponent,
    CustomerPartnerCustomerFoundComponent,
    CustomerPartnerCustomerNotFoundComponent,
    CustomerPartnerIncompleteCustomerFoundComponent,
    CustomerPartnerContactDetailsComponent,
    CustomerPartnerCorrespondenceDetailsComponent,
    CustomerPartnerCustomerSearchComponent
  ],
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
    NxTableModule,
    NxIconModule,
    NxLinkModule,
    NxInputModule,
    BrowserAnimationsModule,
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
    NgxSatSharedComponent,
    CustomerPartnerComponent,
    CustomerPartnerCustomerFoundComponent,
    CustomerPartnerCustomerNotFoundComponent,
    CustomerPartnerIncompleteCustomerFoundComponent,
    CustomerPartnerContactDetailsComponent,
    CustomerPartnerCorrespondenceDetailsComponent,
    CustomerPartnerCustomerSearchComponent
  ]
})
export class NgxSatSharedModule { }
