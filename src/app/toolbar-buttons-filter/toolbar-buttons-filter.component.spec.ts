import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonsFilterComponent } from './toolbar-buttons-filter.component';

describe('ToolbarButtonsFilterComponent', () => {
  let component: ToolbarButtonsFilterComponent;
  let fixture: ComponentFixture<ToolbarButtonsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarButtonsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarButtonsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
