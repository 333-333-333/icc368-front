import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailableSearchListComponent } from './unavailable-search-list.component';

describe('UnavailableSearchListComponent', () => {
  let component: UnavailableSearchListComponent;
  let fixture: ComponentFixture<UnavailableSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnavailableSearchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnavailableSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
