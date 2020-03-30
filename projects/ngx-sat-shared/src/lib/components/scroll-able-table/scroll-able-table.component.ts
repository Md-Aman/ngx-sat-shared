import { Component, OnInit, ChangeDetectorRef, NgZone, HostListener, ViewChild, ElementRef, ViewChildren, ViewRef, AfterViewInit, Input } from '@angular/core';
import { SortEvent, SortDirection } from '@allianz/ngx-ndbx/table/public-api';
import { SiteHeaderService } from '../../services/site-header/site-header.service';
import { NxSortHeaderComponent } from '@allianz/ngx-ndbx/table';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'lib-scroll-able-table',
  templateUrl: './scroll-able-table.component.html',
  styleUrls: ['./scroll-able-table.component.css']
})
export class ScrollAbleTableComponent implements OnInit, AfterViewInit {
  @Input() curPage: number = 1 ;
  @Input() perPage: number = 20;

  topScrollerWidth: number;
  @ViewChild(
    'tableHolder',
    {
        read: ElementRef,
        static: false
    }
) tableHolder;

@ViewChild(
    'table',
    {
        read: ElementRef,
        static: false
    }
) table;

@ViewChild(
    'fixedTableHeader',
    {
        read: ElementRef,
        static: false
    }
) fixedTableHeader;

@ViewChildren(
    'tableHeaderCell',
    {
        read: ElementRef
    }
) tableHeaderCells;

@ViewChildren(
    'tableHeaderCell',
    {
        read: NxSortHeaderComponent
    }
) nxSortHeaderComponents;

@ViewChildren(
    'fixedTableHeaderCell',
    {
        read: NxSortHeaderComponent
    }
) fixedNxSortHeaderComponents;

debouncedScrollEvent;
debouncedScrollSubscription;
throttledScrollEvent;
throttledScrollSubscription;
debouncedResizeEvent;
debouncedResizeSubscription;
throttledResizeEvent;
throttledResizeSubscription;

fixedTableHeaderHolderWidth:number = 0;
fixedTableHeaderWidth:number = 0;
fixedTableHeaderHeight:number = 0;
fixedTableHeaderLeft:number = 0;
fixedTableHeaderColumnWidths:Array<number> = [];
tableHeaderIsFixed:boolean = false;
tableHeaderIsAbsolute:boolean = false;

  constructor(
    private fixedTablePage__changeDetectorRef:ChangeDetectorRef,
    private fixedTablePage__siteHeaderService: SiteHeaderService,
    private fixedTablePage__ngZone:NgZone,
  ) {
    // super(ngZone, changeDetectorRef, siteHeaderService);
    this.adaptTopScrollbar();
    fixedTablePage__ngZone.runOutsideAngular(() => {
      this.debouncedScrollEvent = fromEvent(window, 'scroll')
                                      .pipe(
                                          debounceTime(100)
                                      );

      this.throttledScrollEvent = fromEvent(window, 'scroll')
                                      .pipe(
                                          throttleTime(100)
                                      );

      this.throttledScrollSubscription = this.throttledScrollEvent.subscribe(e => {
          this.doFixedTablePageScroll();
      });

      this.debouncedScrollSubscription = this.debouncedScrollEvent.subscribe(e => {
          this.doFixedTablePageScroll();
      });

      this.debouncedResizeEvent = fromEvent(window, 'resize')
                                      .pipe(
                                          debounceTime(100)
                                      );

      this.throttledResizeEvent = fromEvent(window, 'resize')
                                      .pipe(
                                          throttleTime(100)
                                      );

      this.throttledResizeSubscription = this.throttledResizeEvent.subscribe(e => {
          this.doFixedTablePageResize();
      });

      this.debouncedResizeSubscription = this.debouncedResizeEvent.subscribe(e => {
          this.doFixedTablePageResize();
      });
  });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // @TODO: Find a better way to determine when element sizes are
    // accurately painted in the page, so that we can sync up the
    // width of the columns between the regular table header and the
    // fixed header.
    setTimeout(() => {
        this.doFixedTablePageScroll();
        this.doFixedTablePageResize();
    }, 0);
}

ngOnDestroy() {
    this.throttledScrollSubscription.unsubscribe();
    this.debouncedScrollSubscription.unsubscribe();
    this.throttledResizeSubscription.unsubscribe();
    this.debouncedResizeSubscription.unsubscribe();
}

doFixedTablePageResize() {
    this.fixedTableHeaderHolderWidth = this.tableHolder.nativeElement.clientWidth;
    this.fixedTableHeaderWidth = this.table.nativeElement.clientWidth;
    this.fixedTableHeaderHeight = this.fixedTableHeader.nativeElement.clientHeight;
    this.fixedTableHeaderLeft = this.getPageOffsetLeftOf(this.tableHolder.nativeElement);
    this.tableHeaderCells.forEach((elem, index) => {
        this.fixedTableHeaderColumnWidths[index] = elem.nativeElement.clientWidth;
    });
}

doFixedTablePageScroll() {
    let viewTop = this.getWindowScrollY() + this.siteHeaderHeight;
    let tableTop = this.getPageOffsetTopOf(this.table.nativeElement);
    let tableBottom = tableTop + this.table.nativeElement.clientHeight;

    this.tableHeaderIsFixed = Boolean(viewTop >= tableTop);
    this.tableHeaderIsAbsolute = Boolean(viewTop >= tableBottom - this.fixedTableHeaderHeight);
    if(this.fixedTablePage__changeDetectorRef && !(this.fixedTablePage__changeDetectorRef as ViewRef).destroyed) {
        this.fixedTablePage__changeDetectorRef.detectChanges();
    }
}

syncTableHeaderSort(sort:SortEvent) {
    this.nxSortHeaderComponents
        .filter(nxSortHeaderComponent => {
            return nxSortHeaderComponent.key === sort.active
        })
        .forEach(nxSortHeaderComponent => {
            nxSortHeaderComponent._sort.active = sort.active;
            nxSortHeaderComponent._sort.direction = sort.direction;
        });

    this.fixedNxSortHeaderComponents
        .filter(fixedNxSortHeaderComponent => {
            return fixedNxSortHeaderComponent.key === sort.active
        })
        .forEach(fixedNxSortHeaderComponent => {
            fixedNxSortHeaderComponent._sort.active = sort.active;
            fixedNxSortHeaderComponent._sort.direction = sort.direction;
        });
}

get siteHeaderHeight() {
    return this.fixedTablePage__siteHeaderService.height;
}

getWindowScrollY() {
    return (typeof window.scrollY === 'number')
        ? window.scrollY
        : document.documentElement.scrollTop; // For IE11
}

/*
 * This is a convenience method to get an element's top position from the
 * top of the page.
 *
 * Regular `offsetTop` returns the value based on its closest relative
 * parent, instead of being based on the whole page. If we want to know the
 * element's top position based on the whole page, we will need to traverse
 * up its `offsetParent` nodes and sum up all the `offsetTop` values.
 */
getPageOffsetTopOf(element) {
    let currentElement = element;
    let top = currentElement.offsetTop;

    while(currentElement.offsetParent) {
        currentElement = currentElement.offsetParent;
        top += currentElement.offsetTop;
    }

    return top;
}

/*
 * This is a convenience method to get an element's left position from the
 * left of the page.
 *
 * Regular `offsetLeft` returns the value based on its closest relative
 * parent, instead of being based on the whole page. If we want to know the
 * element's left position based on the whole page, we will need to traverse
 * up its `offsetParent` nodes and sum up all the `offsetLeft` values.
 */
getPageOffsetLeftOf(element) {
    let currentElement = element;
    let left = currentElement.offsetLeft;

    while(currentElement.offsetParent) {
        currentElement = currentElement.offsetParent;
        left += currentElement.offsetLeft;
    }

    return left;
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
