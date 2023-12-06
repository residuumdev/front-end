import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableParticipantes2023Component } from './datatable-participantes-2023.component';

describe('DatatableParticipantes2023Component', () => {
  let component: DatatableParticipantes2023Component;
  let fixture: ComponentFixture<DatatableParticipantes2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableParticipantes2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatatableParticipantes2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
