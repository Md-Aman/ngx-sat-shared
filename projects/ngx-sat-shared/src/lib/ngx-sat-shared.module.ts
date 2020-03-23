import { NgModule } from '@angular/core';
import { NgxSatSharedComponent } from './ngx-sat-shared.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [NgxSatSharedComponent, TestComponent],
  imports: [
  ],
  exports: [NgxSatSharedComponent, TestComponent]
})
export class NgxSatSharedModule { }
