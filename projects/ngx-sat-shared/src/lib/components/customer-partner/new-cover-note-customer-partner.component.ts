import { Component } from '@angular/core';
// import { Store, Select } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';

// import { NCNBasePage } from 'src/app/shared/classes/ncn.base';
// import { 
//   GET_CUSTOMER_PARTNER, 
//   STORE_STEP3_SEARCH,
//   STORE_STEP3,
//   CREATE_CUSTOMER_PARTNER, 
//   CHANGE_CURRENT_STEP,
//   SHOW_SEARCH_COMPONENT_3,
//   RESET_STORE_3
// } from 'src/app/store/new-cn/new-cn.action';
// import { NCNState } from 'src/app/store/new-cn/new-cn.state';
// import { STEP3, STEP1 } from 'src/app/shared/interfaces/new-cn';
// import {
//   IDTYPE,
//   CLIENTTYPE,
//   CLIENTADDRESSTYPE,
//   GENDER,
//   MARITALSTATUS
// } from 'src/app/shared/enums/index.enum';
// import { fn } from 'src/app/libraries/utilities/fn';
// import { 
//   buildSearchInfo, 
//   buildAgentInfo, 
//   buildBasicDetail, 
//   buildContactDetail, 
//   buildCorrespondenceDetail, 
//   buildExistingData} from 'src/app/libraries/utilities/query.helper';
// import { DashboardState } from 'src/app/store/dashboard/dashboard.state';


@Component({
  selector: 'app-new-cover-note-customer-partner',
  templateUrl: './new-cover-note-customer-partner.component.html',
  styleUrls: ['./new-cover-note-customer-partner.component.scss']
})
export class NewCoverNoteCustomerPartnerComponent{

  // @Select(NCNState.isCustomerPartnerFound) isCustomerPartnerFound$;
  // @Select(NCNState.isCustomerPartnerNotFound) isCustomerPartnerNotFound$;
  // @Select(NCNState.incompletedUser) incompletedUser$;
  // @Select(NCNState.dataStore3) dataStore3$;
  // @Select(NCNState.dataSearch3) dataSearch3$;
  // @Select(NCNState.step3Data) step3Data$;
  // @Select(NCNState.showSearchComponent) showSearchComponent$;
  // @Select(NCNState.enableAction3) enableAction3$;
  // @Select(DashboardState.stateList) stateList$;
  // @Select(DashboardState.countryList) countryList$;
  // @Select(DashboardState.clientFax1CodeList) clientFax1CodeList$;
  // @Select(DashboardState.clientMobileCode1List) clientMobileCode1List$;
  // @Select(DashboardState.clientPhoneCodeList) clientPhoneCodeList$;

  CPFound = {

  };

  stateList = [];
  countryList = [];

  constructor(public route: ActivatedRoute, public router: Router) {

  }

  searchAgain($event) {
    // this.store.dispatch(new SHOW_SEARCH_COMPONENT_3(true));
    // this.store.dispatch(new RESET_STORE_3());
  }

  // onSearch($event: STEP3.SearchDataStore) {
    // const agentInfo = this.store.selectSnapshot<STEP1.DataStore>(state => state.NCNState.ncn.step1);
    // const params: STEP3.SearchQuery = {
    //   idType: $event.idType1,
    //   idValue: $event.idValue1,
    //   agentCode: agentInfo.code
    // }
    // this.store.dispatch(new STORE_STEP3_SEARCH($event));
    // this.store.dispatch(new GET_CUSTOMER_PARTNER(params));
  // }

  onCreatedCustomerPartner($event) {
    const params = this.buildQuery($event);
    // this.store.dispatch(new STORE_STEP3(params));
  }

  onUpdatedCustomerPartner($event) {
    const params = this.buildQuery($event, true);
    // this.store.dispatch(new STORE_STEP3(params));
  }

  buildQuery(dataObject, isUpdate: boolean = false) {
    // const dataSearch = this.store.selectSnapshot<STEP3.SearchDataStore>(state => state.NCNState.ncn.step3.search);
    // const agentInfo = this.store.selectSnapshot<STEP1.DataStore>(state => state.NCNState.ncn.step1);
    // const initQuery = fn.pipe(
    //   buildSearchInfo(dataSearch),
    //   buildBasicDetail(dataObject),
    //   buildContactDetail(dataObject),
    //   buildCorrespondenceDetail(dataObject)
    // );

    // return initQuery({updateCustomerPartner: isUpdate});
  }

  nextPage() {
    // const dataObject = this.store.selectSnapshot<STEP3.ResponseData>(state => state.NCNState.step3);
    // const agentInfo = this.store.selectSnapshot<STEP1.DataStore>(state => state.NCNState.ncn.step1);
    // const initQuery = fn.pipe(buildExistingData(dataObject));
    // const params = initQuery({});
    // if(dataObject) {
    //   this.store.dispatch(new STORE_STEP3(params));
    // } else {
    //   const userId = this.store.selectSnapshot<string>(state=> state.UserState.user.userId);
    //   this.store.dispatch(new CREATE_CUSTOMER_PARTNER(userId));
    // }
  }
}
