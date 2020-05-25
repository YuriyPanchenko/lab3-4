import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldTicketComponent } from './sold-ticket.component';

describe('SoldTicketComponent', () => {
  let component: SoldTicketComponent;
  let fixture: ComponentFixture<SoldTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
