import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Incrementador2Component } from './incrementador2.component';

describe('Incrementador2Component', () => {
  let component: Incrementador2Component;
  let fixture: ComponentFixture<Incrementador2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Incrementador2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Incrementador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
