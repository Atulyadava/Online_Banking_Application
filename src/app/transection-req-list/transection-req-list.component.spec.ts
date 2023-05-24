import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionReqListComponent } from './transection-req-list.component';

describe('TransectionReqListComponent', () => {
  let component: TransectionReqListComponent;
  let fixture: ComponentFixture<TransectionReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransectionReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransectionReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
