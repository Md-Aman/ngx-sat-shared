import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef, HostListener } from '@angular/core';
import { SortEvent, SortDirection } from '@allianz/ngx-ndbx/table/public-api';

import { FixedTablePage } from './../shared/fixed-table-page.class';
import { SiteHeaderService } from './../shared/services/site-header.service';

@Component({
  selector: 'test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent extends FixedTablePage implements OnInit {
  @ViewChild('scrollOne', { static: false }) scrollOne: ElementRef;
  @ViewChild('scrollTwo', { static: false }) scrollTwo: ElementRef;

  // pageFilterForm: FormGroup;

  currentSort: any = null;
  curpage: number = 1;
  perPage: number = 20;
  itemsPerPageSelections = [5, 10, 20, 50, 100];
  showSummaryFiltersForm: boolean = false;
  topScrollerWidth: number;

  isFiltered: boolean = false;

  constructor(
      private changeDetectorRef:ChangeDetectorRef,
      private siteHeaderService: SiteHeaderService,
      private ngZone:NgZone,
      )  {
        super(ngZone, changeDetectorRef, siteHeaderService);
        this.adaptTopScrollbar();
  }

  ngOnInit() {
      // this.initForm();
  }

  // initForm() {
  //     this.pageFilterForm = this.formBuilder.group({
  //         perPage: [this.perPage]
  //     });
  // }



  sortTable(sort: SortEvent, tableType:string) {
      if(tableType === 'table') {
          this.summaryList = this.summaryList.slice().sort((a, b) => {
              if (sort.active in a && sort.active in b) {
                  return this.compare(a[sort.active], b[sort.active], sort.direction);
              }
              return 0;
          });
      }
      
      this.syncTableHeaderSort(sort);
  }

  compare(
      a: number | string | Date,
      b: number | string | Date,
      direction: SortDirection) {

      return (a < b ? -1 : 1) * (direction === 'asc' ? 1 : -1);
  }

  prevPage() {
      this.curpage--;
  }

  nextPage() {
      this.curpage++;
  }

  goToPage(n: number) {
      this.curpage = n;
  }

  @HostListener('window:resize') adaptTopScrollbar() {
      if (window.innerWidth < 480) {
          this.topScrollerWidth = 914;
      }
      if (window.innerWidth > 480) {
          this.topScrollerWidth = 884;
      }
  }


  coverNoteDetails(contractId) {

  }


  onScrollTop() {
      let scroller = document.querySelector('.above-scroller');
      let table = document.querySelector('.summary-table');
      table.scrollTo(scroller.scrollLeft, 0);
  }

  onScrollBottom() {
      let scroller = document.querySelector('.above-scroller');
      let table = document.querySelector('.summary-table');
      scroller.scrollTo(table.scrollLeft, 0);
  }

  ngOnDestroy() {
  }



  summaryList = [
    {
      "contractId": 90273,
      "cnoteNo": "ANCKL0008190",
      "cnoteType": "NW",
      "productType": "ECN",
      "productName": "ALLIANZ BOOSTER CARE",
      "productCode": "101001",
      "cnoteStatus": "CANCELLED",
      "insuredName": "LIM BING BING RTER",
      "cnoteDate": "2020-01-14",
      "clientPartner": {
        "clientName": "LIM BING BING RTER"
      },
      "mkagAgent": {
        "agentCode": "KL02567",
        "name": "WINTEROSE CORPORATION SDN BHD",
        "bancaAgent": false,
        "code": "KL02567"
      }
    },
    {
      "contractId": 90273,
      "cnoteNo": "ANCKL0008190",
      "cnoteType": "NW",
      "productType": "ECN",
      "productName": "ALLIANZ BOOSTER CARE",
      "productCode": "101001",
      "cnoteStatus": "CANCELLED",
      "insuredName": "LIM BING BING RTER",
      "cnoteDate": "2020-01-14",
      "clientPartner": {
        "clientName": "LIM BING BING RTER"
      },
      "mkagAgent": {
        "agentCode": "KL02567",
        "name": "WINTEROSE CORPORATION SDN BHD",
        "bancaAgent": false,
        "code": "KL02567"
      }
    },
    {
      "contractId": 90273,
      "cnoteNo": "ANCKL0008190",
      "cnoteType": "NW",
      "productType": "ECN",
      "productName": "ALLIANZ BOOSTER CARE",
      "productCode": "101001",
      "cnoteStatus": "CANCELLED",
      "insuredName": "LIM BING BING RTER",
      "cnoteDate": "2020-01-14",
      "clientPartner": {
        "clientName": "LIM BING BING RTER"
      },
      "mkagAgent": {
        "agentCode": "KL02567",
        "name": "WINTEROSE CORPORATION SDN BHD",
        "bancaAgent": false,
        "code": "KL02567"
      }
    },
    {
      "contractId": 90273,
      "cnoteNo": "ANCKL0008190",
      "cnoteType": "NW",
      "productType": "ECN",
      "productName": "ALLIANZ BOOSTER CARE",
      "productCode": "101001",
      "cnoteStatus": "CANCELLED",
      "insuredName": "LIM BING BING RTER",
      "cnoteDate": "2020-01-14",
      "clientPartner": {
        "clientName": "LIM BING BING RTER"
      },
      "mkagAgent": {
        "agentCode": "KL02567",
        "name": "WINTEROSE CORPORATION SDN BHD",
        "bancaAgent": false,
        "code": "KL02567"
      }
    },
  ];

}
