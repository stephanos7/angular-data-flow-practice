import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Component } from './level-1.component';

describe('Level1Component', () => {
  let component: Level1Component;
  let fixture: ComponentFixture<Level1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
