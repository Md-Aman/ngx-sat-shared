import { Component, AfterViewInit, HostListener, Input, ElementRef, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SyncScrollService } from '../sync-scroll/sync-scroll.service';

@Component({
    selector: 'external-scrollbar',
    templateUrl: './external-scrollbar.component.html',
    styleUrls: ['./external-scrollbar.component.scss'],
    exportAs: 'externalScrollbar',
})
export class ExternalScrollbarComponent implements AfterViewInit, OnDestroy {
    @Input('targetSyncScroll') targetSyncScroll:string;
    @Input('targetBaseWidth') targetBaseWidth:HTMLElement;
    @ViewChild('scrollbar', { static: false }) scrollbar:ElementRef;
    syncScrollIndex:number = -1;
    scrollWidth:number = 0;

    @HostListener('window:resize') onResize() {
        this.scrollWidth = this.targetBaseWidth.scrollWidth;
    }

    constructor(
        private changeDetectorRef:ChangeDetectorRef,
        private syncScrollService:SyncScrollService,
    ) { }

    ngAfterViewInit() {
        this.syncScrollIndex = this.syncScrollService.add(this.targetSyncScroll, this.scrollbar);
        this.onResize();
        this.changeDetectorRef.detectChanges();
    }

    get canScroll():boolean {
        return this.targetBaseWidth.scrollWidth > this.targetBaseWidth.clientWidth;
    }

    syncScroll() {
        this.syncScrollService.sync(this.targetSyncScroll, this.syncScrollIndex);
    }

    ngOnDestroy() {
        this.syncScrollService.remove(this.targetSyncScroll, this.syncScrollIndex);
    }
}
