import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject, fromEvent, merge} from 'rxjs';
import { debounceTime, map, takeUntil} from 'rxjs/operators';
// import { CONSTANTS } from 'src/app/shared/enums/index.enum';

@Component({
  selector: 'ncn-customer-partner-incomplete-customer-found',
  templateUrl: './new-cover-note-customer-partner-incomplete-customer-found.component.html',
  styleUrls: ['./new-cover-note-customer-partner-incomplete-customer-found.component.scss']
})
export class NewCoverNoteCustomerPartnerIncompleteCustomerFoundComponent implements OnInit, OnDestroy {
  @Input() source;
  @Input() states;
  @Input() countries;
  @Input() faxList;
  @Input() mobileCode;
  @Input() flCode;
  @Output() completed = new EventEmitter();
  @Output() searchAgain:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  detailForm: FormGroup;
  unsubscribe$ = new Subject();

  // getCountry = CONSTANTS.getCountry();
  // getGender = CONSTANTS.getGender();
  // getMaritalStatus = CONSTANTS.getMaritalStatus();

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.initForm();
    this.onFormChange();
  }

  get name() {
    return this.source? this.source.clientName : '';
  }

  get idValue() {
    return this.source? this.source.idValue1 : '';
  }

  // get countryname() {
  //   return this.source? this.getCountry(this.source.clientNationality) : '';
  // }

  // get gender() {
  //   return this.source? this.getGender(this.source.clientGender) : '';
  // }

  // get marriedStatus() {
  //   return this.source? this.getMaritalStatus(this.source.clientMaritalStatus): '';
  // }

  initForm() {
    this.detailForm = this.fb.group({
      clientName: ['', Validators.required],
      longName: [''],
      clientGender: ['1', Validators.required],
      clientMaritalStatus: ['1', Validators.required],
      clientAddress1: ['', Validators.required],
      clientAddress2: ['', Validators.required],
      clientAddress3: ['', Validators.required],
      clientPostcode: ['', Validators.required],
      clientCity: ['', Validators.required],
      clientState: ['', Validators.required],
      clientCountry: ['', Validators.required],
      clientMobileCode1: [ this.mobileCode ? this.mobileCode[0].code : '', Validators.required],
      clientMobileNo1: ['', Validators.required],
      clientMobileCode2: [this.flCode ? this.flCode[0].code : '', Validators.required],
      clientMobileNo2: ['', Validators.required],
      clientFax1Code: [this.faxList ? this.faxList[0].code : '', Validators.required],
      clientFax1No: ['', Validators.required],
      clientEmail: ['', Validators.required],
      clientAddressType: ['R', Validators.required],
    });
  }

  onFormChange() {
    merge(
      this.detailForm.get('clientAddress1').valueChanges,
      this.detailForm.get('clientAddress2').valueChanges,
      this.detailForm.get('clientAddress3').valueChanges,
      this.detailForm.get('clientPostcode').valueChanges,
      this.detailForm.get('clientCity').valueChanges,
      this.detailForm.get('clientState').valueChanges,
      this.detailForm.get('clientCountry').valueChanges,
      this.detailForm.get('clientMobileCode1').valueChanges,
      this.detailForm.get('clientMobileNo1').valueChanges,
      this.detailForm.get('clientMobileCode2').valueChanges,
      this.detailForm.get('clientMobileNo2').valueChanges,
      this.detailForm.get('clientFax1Code').valueChanges,
      this.detailForm.get('clientFax1No').valueChanges,
      this.detailForm.get('clientEmail').valueChanges,
      this.detailForm.get('clientAddressType').valueChanges
    ).pipe(
      debounceTime(250),
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      if(this.detailForm.valid) {
        this.completed.emit(this.detailForm.getRawValue())
      }
    })
  }

  restartSearch() {
    this.searchAgain.emit(true);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
