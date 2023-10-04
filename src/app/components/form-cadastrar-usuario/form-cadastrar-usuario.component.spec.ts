import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarUsuarioComponent } from './form-cadastrar-usuario.component';

describe('FormCadastrarUsuarioComponent', () => {
  let component: FormCadastrarUsuarioComponent;
  let fixture: ComponentFixture<FormCadastrarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastrarUsuarioComponent],
    });
    fixture = TestBed.createComponent(FormCadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
