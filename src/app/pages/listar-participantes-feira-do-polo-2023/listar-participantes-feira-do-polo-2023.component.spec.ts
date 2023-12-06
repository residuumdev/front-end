import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParticipantesFeiraDoPolo2023Component } from './listar-participantes-feira-do-polo-2023.component';

describe('ListarParticipantesFeiraDoPolo2023Component', () => {
  let component: ListarParticipantesFeiraDoPolo2023Component;
  let fixture: ComponentFixture<ListarParticipantesFeiraDoPolo2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarParticipantesFeiraDoPolo2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarParticipantesFeiraDoPolo2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
