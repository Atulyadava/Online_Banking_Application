import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrolReqListComponent } from './withdrol-req-list.component';

describe('WithdrolReqListComponent', () => {
  let component: WithdrolReqListComponent;
  let fixture: ComponentFixture<WithdrolReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrolReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrolReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
