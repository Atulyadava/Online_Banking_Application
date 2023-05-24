import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipositReqListComponent } from './diposit-req-list.component';

describe('DipositReqListComponent', () => {
  let component: DipositReqListComponent;
  let fixture: ComponentFixture<DipositReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipositReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipositReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
