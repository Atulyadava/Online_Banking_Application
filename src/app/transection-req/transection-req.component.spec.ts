import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionReqComponent } from './transection-req.component';

describe('TransectionReqComponent', () => {
  let component: TransectionReqComponent;
  let fixture: ComponentFixture<TransectionReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransectionReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransectionReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
