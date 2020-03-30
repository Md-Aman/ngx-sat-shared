import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPartnerComponent } from 'projects/ngx-sat-shared/src/lib/components/customer-partner/customer-partner.component';


const routes: Routes = [
  { path: 'customer-partner', component: CustomerPartnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
