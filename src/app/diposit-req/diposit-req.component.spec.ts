import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipositReqComponent } from './diposit-req.component';

describe('DipositReqComponent', () => {
  let component: DipositReqComponent;
  let fixture: ComponentFixture<DipositReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipositReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipositReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
