import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Excercice2Component } from './excercice2.component';

describe('Excercice2Component', () => {
  let component: Excercice2Component;
  let fixture: ComponentFixture<Excercice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Excercice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Excercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
