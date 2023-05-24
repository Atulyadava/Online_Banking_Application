import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechbookReqComponent } from './chechbook-req.component';

describe('ChechbookReqComponent', () => {
  let component: ChechbookReqComponent;
  let fixture: ComponentFixture<ChechbookReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechbookReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChechbookReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
