import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Excercice1Component } from './excercice1.component';

describe('Excercice1Component', () => {
  let component: Excercice1Component;
  let fixture: ComponentFixture<Excercice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Excercice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Excercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
