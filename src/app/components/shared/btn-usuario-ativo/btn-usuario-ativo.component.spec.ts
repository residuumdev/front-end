import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUsuarioAtivoComponent } from './btn-usuario-ativo.component';

describe('BtnUsuarioAtivoComponent', () => {
  let component: BtnUsuarioAtivoComponent;
  let fixture: ComponentFixture<BtnUsuarioAtivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnUsuarioAtivoComponent]
    });
    fixture = TestBed.createComponent(BtnUsuarioAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
