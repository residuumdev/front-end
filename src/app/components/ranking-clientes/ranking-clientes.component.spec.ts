import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingClientesComponent } from './ranking-clientes.component';

describe('RankingClientesComponent', () => {
  let component: RankingClientesComponent;
  let fixture: ComponentFixture<RankingClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingClientesComponent],
    });
    fixture = TestBed.createComponent(RankingClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
