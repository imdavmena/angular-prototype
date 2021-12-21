import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDetailsCardsComponent } from './management-details-cards.component';

describe('ManagementDetailsCardsComponent', () => {
  let component: ManagementDetailsCardsComponent;
  let fixture: ComponentFixture<ManagementDetailsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementDetailsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDetailsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
