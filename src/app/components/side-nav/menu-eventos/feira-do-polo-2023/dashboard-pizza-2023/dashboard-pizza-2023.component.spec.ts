import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPizza2023Component } from './dashboard-pizza-2023.component';

describe('DashboardPizza2023Component', () => {
  let component: DashboardPizza2023Component;
  let fixture: ComponentFixture<DashboardPizza2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPizza2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPizza2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
