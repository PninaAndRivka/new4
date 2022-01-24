import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringInformationComponent } from './entering-information.component';

describe('EnteringInformationComponent', () => {
  let component: EnteringInformationComponent;
  let fixture: ComponentFixture<EnteringInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteringInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
