import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempluComponent } from './exemplu.component';

describe('ExempluComponent', () => {
  let component: ExempluComponent;
  let fixture: ComponentFixture<ExempluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempluComponent]
    });
    fixture = TestBed.createComponent(ExempluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
