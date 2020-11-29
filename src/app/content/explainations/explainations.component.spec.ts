import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainationsComponent } from './explainations.component';

describe('ExplainationsComponent', () => {
  let component: ExplainationsComponent;
  let fixture: ComponentFixture<ExplainationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
