import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPizzaFeiraDoPolo2023Component } from './grafico-pizza-feira-do-polo-2023.component';

describe('GraficoPizzaFeiraDoPolo2023Component', () => {
  let component: GraficoPizzaFeiraDoPolo2023Component;
  let fixture: ComponentFixture<GraficoPizzaFeiraDoPolo2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoPizzaFeiraDoPolo2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoPizzaFeiraDoPolo2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
