// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { SyncScrollDirective } from './sync-scroll.directive';

@NgModule({
    declarations: [
        SyncScrollDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SyncScrollDirective
    ]
})
export class SyncScrollModule { }
