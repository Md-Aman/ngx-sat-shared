import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() curPageChanges = new EventEmitter();
  @Output() perPageChanges = new EventEmitter();
  pageFilterForm: FormGroup;
  unsubscribe$ = new Subject();

  @Input() dataLength: number = 5;
  @Input() curPage: number = 1;
  @Input() perPage: number = 5;
  @Input() itemsPerPageSelections = [5, 10, 20, 50, 100];

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.initForm();
    this.setItemPerPage();
  }

  initForm() {
    this.pageFilterForm = this.formBuilder.group({
      perPage: [this.perPage]
    });
  }

  setItemPerPage() {
    this.pageFilterForm.get('perPage').valueChanges.pipe(
      debounceTime(250),
      takeUntil(this.unsubscribe$)
    ).subscribe((value) => {
      this.curPage = 1;
      this.perPage = value;
      this.perPageChanges.emit(this.perPage);
      this.emitCurPage();
    });
  }

  emitCurPage() {
    this.curPageChanges.emit(this.curPage);
  }

  prevPage() {
    this.curPage--;
    this.emitCurPage();
  }

  nextPage() {
    this.curPage++;
    this.emitCurPage();
  }

  goToPage(n: number) {
    this.curPage = n;
    this.emitCurPage();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
