import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFeiraDoPolo2023Component } from './dashboard-feira-do-polo-2023.component';

describe('DashboardFeiraDoPolo2023Component', () => {
  let component: DashboardFeiraDoPolo2023Component;
  let fixture: ComponentFixture<DashboardFeiraDoPolo2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFeiraDoPolo2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardFeiraDoPolo2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
