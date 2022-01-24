import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersFormComponent } from './volunteers-form.component';

describe('VolunteersFormComponent', () => {
  let component: VolunteersFormComponent;
  let fixture: ComponentFixture<VolunteersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
