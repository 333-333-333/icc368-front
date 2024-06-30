import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsByDateComponent } from './visitors-by-date.component';

describe('VisitorsByDateComponent', () => {
  let component: VisitorsByDateComponent;
  let fixture: ComponentFixture<VisitorsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorsByDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
