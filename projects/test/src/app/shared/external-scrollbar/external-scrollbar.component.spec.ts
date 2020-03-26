import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalScrollbarComponent } from './external-scrollbar.component';

describe('ExternalScrollbarComponent', () => {
  let component: ExternalScrollbarComponent;
  let fixture: ComponentFixture<ExternalScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
