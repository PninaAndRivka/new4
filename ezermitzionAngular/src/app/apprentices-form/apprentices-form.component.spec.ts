import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticesFormComponent } from './apprentices-form.component';

describe('ApprenticesFormComponent', () => {
  let component: ApprenticesFormComponent;
  let fixture: ComponentFixture<ApprenticesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenticesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
