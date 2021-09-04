import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingpadComponent } from './typingpad.component';

describe('TypingpadComponent', () => {
  let component: TypingpadComponent;
  let fixture: ComponentFixture<TypingpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
