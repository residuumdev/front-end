import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpresasComponent } from './editar-empresas.component';

describe('EditarEmpresasComponent', () => {
  let component: EditarEmpresasComponent;
  let fixture: ComponentFixture<EditarEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmpresasComponent]
    });
    fixture = TestBed.createComponent(EditarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
