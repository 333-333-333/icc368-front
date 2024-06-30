import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsAndExhibitionsComponent } from './visitors-and-exhibitions.component';

describe('VisitorsAndExhibitionsComponent', () => {
  let component: VisitorsAndExhibitionsComponent;
  let fixture: ComponentFixture<VisitorsAndExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorsAndExhibitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsAndExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
