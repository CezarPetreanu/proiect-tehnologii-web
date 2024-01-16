import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapePageComponent } from './scrape-page.component';

describe('ScrapePageComponent', () => {
  let component: ScrapePageComponent;
  let fixture: ComponentFixture<ScrapePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrapePageComponent],
    });
    fixture = TestBed.createComponent(ScrapePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
