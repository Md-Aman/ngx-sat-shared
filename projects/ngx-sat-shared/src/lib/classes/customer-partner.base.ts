import { Input } from '@angular/core';
// import { CONSTANTS, CLIENTTYPE, COUNTRIES, IDTYPE } from 'src/app/shared/enums/index.enum';
// import { STEP3 } from 'src/app/shared/interfaces/new-cn';

export abstract class CustomerPartnerBase {
  @Input() source;
  @Input() states;
  @Input() countries;
  @Input() cities;

  // getClientType = CONSTANTS.getClientType();
  // getMaritalStatus = CONSTANTS.getMaritalStatus();
  // getIdLabel = CONSTANTS.getIdLabel();
  // getCountry = CONSTANTS.getCountry();
  // getGender = CONSTANTS.getGender();
  
  constructor() {}
  
  // get type() {
  //   return this.getClientType(this.source.clientType);
  // }

  get name() {
    return  this.source.clientName;
  }

  get longName() {
    return this.source.insuredName;
  }

  // get idLabel() {
  //   return this.getIdLabel(this.source.idType1);
  // }

  get idValue() {
    return this.source.idValue1;
  }

  // get gender() {
  //   return this.getGender(this.source.clientGender);
  // }

  // get countryname() {
  //   return this.source.idType1 === IDTYPE.PASS? COUNTRIES.NM: COUNTRIES.MAL;
    // return this.source.clientNationality === COUNTRIES.MALAYSIAN? this.getCountry(this.source.clientNationality): COUNTRIES.NM;
  // }

  // get marriedStatus() {
  //   return this.getMaritalStatus(this.source.clientMaritalStatus) ? 
  //   this.getMaritalStatus(this.source.clientMaritalStatus) 
  //   : 
  //   CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get mobilePhone() {
  //   return this.source.clientMobileCode1 && this.source.clientMobileNo1 ?
  //     `${this.source.clientMobileCode1}-${this.source.clientMobileNo1}`
  //     :
  //     CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get fixLine() {
  //   return this.source.clientMobileCode2 && this.source.clientMobileNo2 ?
  //     `${this.source.clientMobileCode2}-${this.source.clientMobileNo2}`
  //     :
  //     CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get faxNumner() {
  //   return this.source.clientPartnerAddress!.clientFax1Code && this.source.clientPartnerAddress!.clientFax1No ?
  //     `${this.source.clientPartnerAddress.clientFax1Code}-${this.source.clientPartnerAddress.clientFax1No}`
  //     :
  //     CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get fullAddress() {
  //   const clientPartnerAddress = this.source.clientPartnerAddress;
  //   const clientAddress1 = clientPartnerAddress.clientAddress1 ? clientPartnerAddress.clientAddress1 : '';
  //   const clientAddress2 = clientPartnerAddress.clientAddress2 ? clientPartnerAddress.clientAddress2 : '';
  //   const clientAddress3 = clientPartnerAddress.clientAddress3 ? clientPartnerAddress.clientAddress3 : '';
  //   const address = `${clientAddress1} ${clientAddress2} ${clientAddress3}`;
  //   return `${address}, ${clientPartnerAddress.clientPostcode}, ${this.city}, ${this.state}, ${this.country}`;
  // }

  // get city(){
  //   const city = this.cities.find(city => city.code === this.source.clientPartnerAddress.clientCity);
  //   return city ? city.descp : CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get state() {
  //   const state = this.states.find(state => state.code === this.source.clientPartnerAddress.clientState);
  //   return state ? state.descp : CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get country() {
  //   const country = this.countries.find(country => country.code === this.source.clientPartnerAddress.clientCountry);
  //   return country ? country.descp : CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get email() {
  //   return this.source.clientEmail ? this.source.clientEmail : CONSTANTS.DEFAULT_DISPLAY;
  // }

  // get isLongName() {
  //   return this.source.insuredName != null;
  // }

  // get isIndividual() {
  //   return this.source.clientType === CLIENTTYPE.INDIVIDUAL;
  // }
}