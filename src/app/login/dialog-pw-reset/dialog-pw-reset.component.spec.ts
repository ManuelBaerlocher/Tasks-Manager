import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPwResetComponent } from './dialog-pw-reset.component';

describe('DialogPwResetComponent', () => {
  let component: DialogPwResetComponent;
  let fixture: ComponentFixture<DialogPwResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPwResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPwResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
