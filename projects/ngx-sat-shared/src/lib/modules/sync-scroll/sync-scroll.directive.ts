// Angular
import { Directive, Input, ElementRef, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
// Module
import { SyncScrollService } from './sync-scroll.service';

@Directive({
    selector: '[syncScroll]'
})
export class SyncScrollDirective implements OnInit, OnDestroy {
    @Input('syncScroll') key:string;
    serviceIndex:number = -1;

    constructor(
        private elementRef:ElementRef,
        private syncScrollService:SyncScrollService,
    ) {}

    ngOnInit() {
        this.serviceIndex = this.syncScrollService.add(this.key, this.elementRef);
    }

    ngOnDestroy() {
        this.syncScrollService.remove(this.key, this.serviceIndex);
    }

    @HostListener('scroll') onScroll() {
        this.syncScrollService.sync(this.key, this.serviceIndex);
    }
}
