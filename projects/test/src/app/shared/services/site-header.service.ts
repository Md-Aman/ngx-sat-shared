import { Injectable, ViewChild } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SiteHeaderService {
    desktop;
    mobile;

    constructor() { }

    setDesktop(elem) {
        this.desktop = elem;
    }

    setMobile(elem) {
        this.mobile = elem;
    }

    get height() {
        let heights = [0];

        if(this.mobile) {
            heights.push(this.mobile.nativeElement.clientHeight);
        }

        if(this.desktop) {
            heights.push(this.desktop.nativeElement.clientHeight);
        }

        return Math.max.apply(null, heights);
    }
}
