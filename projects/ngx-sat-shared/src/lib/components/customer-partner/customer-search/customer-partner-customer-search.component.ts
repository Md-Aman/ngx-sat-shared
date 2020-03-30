import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { STEP3 } from 'src/app/shared/interfaces/new-cn';
// import { IDTYPE, CONSTANTS, CLIENTTYPE, COUNTRIES } from 'src/app/shared/enums/index.enum';
// import { NricService } from 'src/app/libraries/nric/nric.service';

@Component({
  selector: 'customer-partner-customer-search',
  templateUrl: './customer-partner-customer-search.component.html',
  styleUrls: ['./customer-partner-customer-search.component.scss']
})
export class CustomerPartnerCustomerSearchComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  // clientType = CONSTANTS.getClientType();
  // country = CONSTANTS.getCountry();
  // idType = CONSTANTS.getIdType();

  ngOnInit() {
    this.searchForm = this.fb.group({
      // clientType: [CLIENTTYPE.INDIVIDUAL],
      // clientAddressType: [COUNTRIES.MALAYSIAN],
      // idType1: [IDTYPE.NRIC],
      // idValue1: ['', Validators.required],
    });
  }

  // get isIndividual() {
  //   return this.searchForm.get('clientType').value === CLIENTTYPE.INDIVIDUAL;
  // }

  // get isMalaysian() {
  //   return this.searchForm.get('clientAddressType').value === COUNTRIES.MALAYSIAN;
  // }

  get errorType() {
    let errors = this.searchForm.controls.idValue1.errors;
    if (!errors) {
      return false;
    }

    return this.getErrorType(errors);
  }

  get idLimitation() {
    return 5;
  }

  getErrorType(errors) {

    if (errors.wrongFormatNRIC) {
      return 'wrongFormatNRIC';
    }

    if (errors.required) {
      return 'required';
    }

    return false;
  }

  onSubmit() {
    // if(this.searchForm.valid) {
    //   if(this.searchForm.controls.idType1.value === IDTYPE.NRIC) {
        
    //     try {
    //       const isValid = this.nricService.isNRICValid(this.searchForm.controls.idValue1.value);
    //       if(isValid) {
    //         this.search.emit(this.buildParams());
    //       }
    //     }catch(err){
    //       this.searchForm.controls.idValue1.setErrors({ 'wrongFormatNRIC': true });
    //     }
        
    //   } else {
    //     this.search.emit(this.buildParams());
    //   }
    // }
  }

  // buildParams(): STEP3.SearchDataStore {
  //   const {clientType, clientAddressType, idType1, idValue1} = this.searchForm.getRawValue();

  //   const object = {
  //     [CLIENTTYPE.INDIVIDUAL]: (): STEP3.SearchDataStore => {
  //       if (clientAddressType === COUNTRIES.NON_MALAYSIAN) {
  //         return {
  //           idType1: IDTYPE.PASS,
  //           idValue1,
  //           clientType,
  //           clientAddressType
  //         }
  //       }

  //       return {
  //           idType1,
  //           idValue1,
  //           clientType,
  //           clientAddressType
  //         }
  //     },
  //     [CLIENTTYPE.COMPANY]: (): STEP3.SearchDataStore => {
  //       return {
  //         idType1: IDTYPE.BR_NO,
  //         idValue1,
  //         clientType,
  //         clientAddressType
  //       }
  //     }
  //   }

  //   return object[clientType]();

  // }
}
