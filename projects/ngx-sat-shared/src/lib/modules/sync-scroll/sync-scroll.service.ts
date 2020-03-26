import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SyncScrollService {
    scrollList:any = {};

    constructor() {}

    add(key, elementRef):number {
        if(this.scrollList[key]) {
            return (this.scrollList[key].push(elementRef) - 1);
        }
        this.scrollList[key] = [elementRef];
        return 0;
    }

    remove(key, index) {
        this.scrollList[key].splice(index, 1);
    }

    sync(key, index) {
        let scrollElems = this.scrollList[key];
        let scrollPosition = scrollElems[index].nativeElement.scrollLeft;

        for(let i = 0; i < scrollElems.length; i++) {
            if(i === index) {
                continue;
            }

            scrollElems[i].nativeElement.scrollLeft = scrollPosition;
        }
    }
}
