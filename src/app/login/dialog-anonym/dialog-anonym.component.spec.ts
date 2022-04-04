import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnonymComponent } from './dialog-anonym.component';

describe('DialogAnonymComponent', () => {
  let component: DialogAnonymComponent;
  let fixture: ComponentFixture<DialogAnonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
