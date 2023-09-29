import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaResiduosZonaComponent } from './mapa-residuos-zona.component';

describe('MapaResiduosZonaComponent', () => {
  let component: MapaResiduosZonaComponent;
  let fixture: ComponentFixture<MapaResiduosZonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaResiduosZonaComponent]
    });
    fixture = TestBed.createComponent(MapaResiduosZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
