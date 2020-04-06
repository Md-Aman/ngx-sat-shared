import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAbleTableComponent } from './scroll-able-table.component';

describe('ScrollAbleTableComponent', () => {
  let component: ScrollAbleTableComponent;
  let fixture: ComponentFixture<ScrollAbleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollAbleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollAbleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
