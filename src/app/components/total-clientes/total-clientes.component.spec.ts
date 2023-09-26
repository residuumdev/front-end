import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClientesComponent } from './total-clientes.component';

describe('TotalClientesComponent', () => {
  let component: TotalClientesComponent;
  let fixture: ComponentFixture<TotalClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalClientesComponent]
    });
    fixture = TestBed.createComponent(TotalClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
