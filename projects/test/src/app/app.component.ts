import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curPage: number = 1;
  perPage: number = 2;
  dataLength: number = 4;
  itemsPerPageSelections = [2, 5, 10, 20, 50, 100];

  curPageChanges(pageNo){
    this.curPage = pageNo;
  }

  perPageChanges(page){
    this.perPage = page;
  }

}
