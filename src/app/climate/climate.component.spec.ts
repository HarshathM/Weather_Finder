import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateComponent } from './climate.component';

describe('ClimateComponent', () => {
  let component: ClimateComponent;
  let fixture: ComponentFixture<ClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
