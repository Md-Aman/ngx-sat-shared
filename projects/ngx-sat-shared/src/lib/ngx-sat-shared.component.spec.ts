import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSatSharedComponent } from './ngx-sat-shared.component';

describe('NgxSatSharedComponent', () => {
  let component: NgxSatSharedComponent;
  let fixture: ComponentFixture<NgxSatSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSatSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSatSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
