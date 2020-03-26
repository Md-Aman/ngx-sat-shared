import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CustomerPartnerBase } from '../../../interfaces/customer-partner.base';
// import { STEP3 } from 'src/app/shared/interfaces/new-cn';
// import { IDTYPE } from 'src/app/shared/enums/index.enum';
// import { CustomerPartnerBase } from 'src/app/shared/classes/customer-partner.base';

@Component({
  selector: 'ncn-customer-partner-customer-found',
  templateUrl: './new-cover-note-customer-partner-customer-found.component.html',
  styleUrls: ['./new-cover-note-customer-partner-customer-found.component.scss']
})
export class NewCoverNoteCustomerPartnerCustomerFoundComponent {
  @Input() source;

  @Output() searchAgain:EventEmitter<boolean> = new EventEmitter<boolean>();

  // customerInfoForm: FormGroup = this.fb.group({
  //   address: [''],
  //   fixedLineNumber: [''],
  //   faxNumber: [''],
  // });

  constructor(private fb: FormBuilder) {
    
  }

  restartSearch() {
    this.searchAgain.emit(true);
  }
}
