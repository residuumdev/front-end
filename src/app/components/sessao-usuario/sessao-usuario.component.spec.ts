import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoUsuarioComponent } from './sessao-usuario.component';

describe('SessaoUsuarioComponent', () => {
  let component: SessaoUsuarioComponent;
  let fixture: ComponentFixture<SessaoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaoUsuarioComponent]
    });
    fixture = TestBed.createComponent(SessaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
