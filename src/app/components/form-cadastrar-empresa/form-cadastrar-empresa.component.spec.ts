import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarEmpresaComponent } from './form-cadastrar-empresa.component';

describe('FormCadastrarEmpresaComponent', () => {
  let component: FormCadastrarEmpresaComponent;
  let fixture: ComponentFixture<FormCadastrarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastrarEmpresaComponent]
    });
    fixture = TestBed.createComponent(FormCadastrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
