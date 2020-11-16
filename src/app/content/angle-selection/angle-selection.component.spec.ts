import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleSelectionComponent } from './angle-selection.component';

describe('AngleSelectionComponent', () => {
  let component: AngleSelectionComponent;
  let fixture: ComponentFixture<AngleSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
