import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerV1Component } from './timer-v1.component';

describe('TimerV1Component', () => {
  let component: TimerV1Component;
  let fixture: ComponentFixture<TimerV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
