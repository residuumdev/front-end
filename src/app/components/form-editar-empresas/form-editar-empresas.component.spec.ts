import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarEmpresasComponent } from './form-editar-empresas.component';

describe('FormEditarEmpresasComponent', () => {
  let component: FormEditarEmpresasComponent;
  let fixture: ComponentFixture<FormEditarEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditarEmpresasComponent]
    });
    fixture = TestBed.createComponent(FormEditarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
