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
  isTrue: boolean = true;
  isFalse: boolean = false;

  CPFound = {
    clientName: "Lee Chong Wei",
    idValue: "740101010101",
    nationality: "Malaysian",
    gender: "Male",
    marriedStatus: "Married",
    mobilePhone: "010-1234567",
    email: "lee@gmail.com",
    address: "32, Jalan Indah, Taman Bahagia 60000 Kuala Lumpur",
    fixLine: "06-3145784",
    faxNumber: "NA"
  };

  curPageChanges(pageNo){
    this.curPage = pageNo;
  }

  perPageChanges(page){
    this.perPage = page;
  }

  onSetAction(value){
    console.log("Action:", value.action);
    console.log("Data:", value.data);
  }

}
