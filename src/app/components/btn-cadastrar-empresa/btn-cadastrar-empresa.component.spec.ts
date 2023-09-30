import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCadastrarEmpresaComponent } from './btn-cadastrar-empresa.component';

describe('BtnCadastrarEmpresaComponent', () => {
  let component: BtnCadastrarEmpresaComponent;
  let fixture: ComponentFixture<BtnCadastrarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnCadastrarEmpresaComponent]
    });
    fixture = TestBed.createComponent(BtnCadastrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
