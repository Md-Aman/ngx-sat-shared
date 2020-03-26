import { Component, OnInit, ChangeDetectorRef, NgZone, HostListener } from '@angular/core';
import { SortEvent, SortDirection } from '@allianz/ngx-ndbx/table/public-api';

// import { FixedTablePage } from 'projects/test/src/app/shared/fixed-table-page.class';
// import { SiteHeaderService } from 'projects/test/src/app/shared/services/site-header.service';

@Component({
  selector: 'lib-scroll-able-table',
  templateUrl: './scroll-able-table.component.html',
  styleUrls: ['./scroll-able-table.component.css']
})
export class ScrollAbleTableComponent implements OnInit {
  topScrollerWidth: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    // private siteHeaderService: SiteHeaderService,
    private ngZone: NgZone,
  ) {
    // super(ngZone, changeDetectorRef, siteHeaderService);
    // this.adaptTopScrollbar();
  }

  ngOnInit() {
  }

  sortTable(sort: SortEvent, tableType: string) {
    if (tableType === 'table') {
      this.summaryList = this.summaryList.slice().sort((a, b) => {
        if (sort.active in a && sort.active in b) {
          return this.compare(a[sort.active], b[sort.active], sort.direction);
        }
        return 0;
      });
    }

    // this.syncTableHeaderSort(sort);
  }

  compare(
    a: number | string | Date,
    b: number | string | Date,
    direction: SortDirection) {

    return (a < b ? -1 : 1) * (direction === 'asc' ? 1 : -1);
  }

  @HostListener('window:resize') adaptTopScrollbar() {
    if (window.innerWidth < 480) {
      this.topScrollerWidth = 914;
    }
    if (window.innerWidth > 480) {
      this.topScrollerWidth = 884;
    }
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
