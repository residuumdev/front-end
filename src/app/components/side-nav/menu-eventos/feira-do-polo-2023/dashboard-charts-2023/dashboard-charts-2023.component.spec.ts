import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCharts2023Component } from './dashboard-charts-2023.component';

describe('DashboardCharts2023Component', () => {
  let component: DashboardCharts2023Component;
  let fixture: ComponentFixture<DashboardCharts2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCharts2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCharts2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
