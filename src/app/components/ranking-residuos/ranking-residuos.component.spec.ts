import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingResiduosComponent } from './ranking-residuos.component';

describe('RankingResiduosComponent', () => {
  let component: RankingResiduosComponent;
  let fixture: ComponentFixture<RankingResiduosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingResiduosComponent],
    });
    fixture = TestBed.createComponent(RankingResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
