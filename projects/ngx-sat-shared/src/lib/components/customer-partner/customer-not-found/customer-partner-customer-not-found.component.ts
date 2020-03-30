import { Component, OnInit, OnDestroy, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
// import { STEP3 } from 'src/app/shared/interfaces/new-cn';
// import { CONSTANTS, COUNTRIES } from 'src/app/shared/enums/index.enum';

@Component({
  selector: 'customer-partner-customer-not-found',
  templateUrl: './customer-partner-customer-not-found.component.html',
  styleUrls: ['./customer-partner-customer-not-found.component.scss']
})
export class CustomerPartnerCustomerNotFoundComponent implements OnInit, OnDestroy {
  @Input() store;
  // @Input() dataSearch: STEP3.SearchDataStore;
  @Input() faxList;
  @Input() mobileCode;
  @Input() flCode;
  @Output() completed = new EventEmitter();
  @Output() searchAgain:EventEmitter<boolean> = new EventEmitter<boolean>();

  // getCountry = CONSTANTS.getCountry();
  // getLabel = CONSTANTS.getIdLabel();

  customerInfoForm: FormGroup;
  unsubscribe$ = new Subject();
  accordionsAreDisabled = false;

  @HostListener('window:resize') checkAccordions() {
    this.accordionsAreDisabled = window.innerWidth > 703;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.onFormChange();
  }

  // get nationality() {
  //   return this.getCountry(this.dataSearch.clientAddressType);
  // }

  // get idLabel() {
  //   return this.getLabel(this.dataSearch.idType1);
  // }

  // get idValue() {
  //   return this.dataSearch.idValue1;
  // }

  initForm() {
    this.customerInfoForm = this.fb.group({
      clientName: [this.getProperty('clientName'), Validators.required],
      longName: [this.getProperty('longName')],
      clientGender: [this.getProperty('clientGender', '1'), Validators.required],
      clientMaritalStatus: [this.getProperty('clientGender', '1'), Validators.required],
      clientAddress1: [this.getClientPartner('clientAddress1'), Validators.required],
      clientAddress2: [this.getClientPartner('clientAddress2'), Validators.required],
      clientAddress3: [this.getClientPartner('clientAddress3'), Validators.required],
      clientPostcode: [this.getClientPartner('clientPostcode'), Validators.required],
      clientCity: [this.getClientPartner('clientCity'), Validators.required],
      clientState: [this.getClientPartner('clientState'), Validators.required],
      clientCountry: [this.getClientPartner('clientCountry'), Validators.required],
      clientMobileCode1: [this.getProperty('clientMobileCode1', this.mobileCode ? this.mobileCode[0].code: ''), Validators.required],
      clientMobileNo1: [this.getProperty('clientMobileNo1'), Validators.required],
      clientMobileCode2: [this.getProperty('clientMobileCode2', this.flCode ? this.flCode[0].code: ''), Validators.required],
      clientMobileNo2: [this.getProperty('clientMobileNo2'), Validators.required],
      clientFax1Code: [this.getClientPartner('clientFax1Code', this.faxList ? this.faxList[0].code : ''), Validators.required],
      clientFax1No: [this.getClientPartner('clientFax1No'), Validators.required],
      clientEmail: [this.getProperty('clientEmail'), Validators.required],
      clientAddressType: [this.getClientPartner('clientAddressType', 'R'), Validators.required]
    });
  }

  getProperty(key, defaultValue = '') {
    return this.store ? this.store[key] : defaultValue;
  }

  getClientPartner(key, defaultValue = ''){
    return this.store ? this.store.clientPartnerAddress[key] : defaultValue;
  }
  onFormChange() {
    merge(
      this.customerInfoForm.get('clientName').valueChanges,
      this.customerInfoForm.get('longName').valueChanges,
      this.customerInfoForm.get('clientGender').valueChanges,
      this.customerInfoForm.get('clientMaritalStatus').valueChanges,
      this.customerInfoForm.get('clientAddress1').valueChanges,
      this.customerInfoForm.get('clientAddress2').valueChanges,
      this.customerInfoForm.get('clientAddress3').valueChanges,
      this.customerInfoForm.get('clientPostcode').valueChanges,
      this.customerInfoForm.get('clientCity').valueChanges,
      this.customerInfoForm.get('clientState').valueChanges,
      this.customerInfoForm.get('clientCountry').valueChanges,
      this.customerInfoForm.get('clientMobileCode1').valueChanges,
      this.customerInfoForm.get('clientMobileNo1').valueChanges,
      this.customerInfoForm.get('clientMobileCode2').valueChanges,
      this.customerInfoForm.get('clientMobileNo2').valueChanges,
      this.customerInfoForm.get('clientFax1Code').valueChanges,
      this.customerInfoForm.get('clientFax1No').valueChanges,
      this.customerInfoForm.get('clientEmail').valueChanges,
      this.customerInfoForm.get('clientAddressType').valueChanges
    ).pipe(
      debounceTime(250),
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      if (this.customerInfoForm.valid) {
        this.completed.emit(this.customerInfoForm.getRawValue())
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
