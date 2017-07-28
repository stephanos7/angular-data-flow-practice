import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0Component } from './level-0.component';

describe('Level0Component', () => {
  let component: Level0Component;
  let fixture: ComponentFixture<Level0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
