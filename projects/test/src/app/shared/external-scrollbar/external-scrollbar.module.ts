import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalScrollbarComponent } from './external-scrollbar.component';

@NgModule({
    declarations: [
        ExternalScrollbarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ExternalScrollbarComponent
    ]
})
export class ExternalScrollbarModule { }
