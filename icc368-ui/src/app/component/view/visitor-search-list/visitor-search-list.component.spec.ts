import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSearchListComponent } from './visitor-search-list.component';

describe('VisitorSearchListComponent', () => {
  let component: VisitorSearchListComponent;
  let fixture: ComponentFixture<VisitorSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorSearchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
