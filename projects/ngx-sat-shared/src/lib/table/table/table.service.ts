import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  doTest() {
    return 'do Test content coming from service';
  }
}
