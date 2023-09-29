import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWorldTempoRealComponent } from './the-world-tempo-real.component';

describe('TheWorldTempoRealComponent', () => {
  let component: TheWorldTempoRealComponent;
  let fixture: ComponentFixture<TheWorldTempoRealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheWorldTempoRealComponent],
    });
    fixture = TestBed.createComponent(TheWorldTempoRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
