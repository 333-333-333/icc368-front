import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsByAttendancesComponent } from './visitors-by-attendances.component';

describe('VisitorsByAttendancesComponent', () => {
  let component: VisitorsByAttendancesComponent;
  let fixture: ComponentFixture<VisitorsByAttendancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorsByAttendancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsByAttendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
