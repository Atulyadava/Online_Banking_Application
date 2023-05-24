import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrolReqComponent } from './withdrol-req.component';

describe('WithdrolReqComponent', () => {
  let component: WithdrolReqComponent;
  let fixture: ComponentFixture<WithdrolReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrolReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrolReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
