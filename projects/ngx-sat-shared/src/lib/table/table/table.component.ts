import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  testForm: FormGroup;
  constructor(private TableService: TableService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    console.warn(this.TableService.doTest());

    this.testForm = this.formBuilder.group({
      test: []
    });
  }

}
