import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsChangeRateComponent } from './visitors-change-rate.component';

describe('VisitorsChangeRateComponent', () => {
  let component: VisitorsChangeRateComponent;
  let fixture: ComponentFixture<VisitorsChangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorsChangeRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsChangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
