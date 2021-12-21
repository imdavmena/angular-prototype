import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideUserdetailComponent } from './aside-userdetail.component';

describe('AsideUserdetailComponent', () => {
  let component: AsideUserdetailComponent;
  let fixture: ComponentFixture<AsideUserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideUserdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
