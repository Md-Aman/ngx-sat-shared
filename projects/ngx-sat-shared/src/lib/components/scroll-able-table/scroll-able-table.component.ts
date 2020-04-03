import { Component, OnInit, ChangeDetectorRef, NgZone, HostListener, ViewChild, ElementRef, ViewChildren, ViewRef, AfterViewInit, Input } from '@angular/core';
import { SortEvent, SortDirection } from '@allianz/ngx-ndbx/table/public-api';
// import { SiteHeaderService } from '../../services/site-header/site-header.service';
import { NxSortHeaderComponent } from '@allianz/ngx-ndbx/table';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';
import { TestComponent } from '../test/test.component';
import { NgxSatSharedService } from '../../ngx-sat-shared.service';
// import { FixedTablePage } from 'projects/test/src/app/shared/fixed-table-page.class';
@Component({
  selector: 'lib-scroll-able-table',
  templateUrl: './scroll-able-table.component.html',
  styleUrls: ['./scroll-able-table.component.css']
})
export class ScrollAbleTableComponent extends TestComponent implements OnInit {
  @Input() curPage: number = 1;
  @Input() perPage: number = 20;

  @ViewChild('scrollOne', { static: false }) scrollOne: ElementRef;
  @ViewChild('scrollTwo', { static: false }) scrollTwo: ElementRef;


  currentSort: any = null;

  topScrollerWidth: number;

  isFiltered: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private siteHeaderService: NgxSatSharedService) {
    super(ngZone, changeDetectorRef, siteHeaderService);
    this.adaptTopScrollbar();
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

    this.syncTableHeaderSort(sort);
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
      "cnoteNo": "ANCKL000819111",
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
      "cnoteNo": "ANCKL000819222",
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
      "cnoteNo": "ANCKL000819333",
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
      "cnoteNo": "ANCKL000819444",
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
