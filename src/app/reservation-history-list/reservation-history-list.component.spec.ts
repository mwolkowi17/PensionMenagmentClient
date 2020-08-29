import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHistoryListComponent } from './reservation-history-list.component';

describe('ReservationHistoryListComponent', () => {
  let component: ReservationHistoryListComponent;
  let fixture: ComponentFixture<ReservationHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
