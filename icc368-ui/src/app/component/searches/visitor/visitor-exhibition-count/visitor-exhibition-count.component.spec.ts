import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorExhibitionCountComponent } from './visitor-exhibition-count.component';

describe('VisitorExhibitionCountComponent', () => {
  let component: VisitorExhibitionCountComponent;
  let fixture: ComponentFixture<VisitorExhibitionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorExhibitionCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorExhibitionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
