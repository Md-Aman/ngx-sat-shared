import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCoverNoteCustomerPartnerComponent } from 'projects/ngx-sat-shared/src/lib/components/customer-partner/new-cover-note-customer-partner.component';


const routes: Routes = [
  { path: 'customer-partner', component: NewCoverNoteCustomerPartnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
