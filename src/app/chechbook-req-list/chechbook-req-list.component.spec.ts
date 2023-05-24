import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechbookReqListComponent } from './chechbook-req-list.component';

describe('ChechbookReqListComponent', () => {
  let component: ChechbookReqListComponent;
  let fixture: ComponentFixture<ChechbookReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechbookReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChechbookReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
