import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSideNavComponent } from './coach-side-nav.component';

describe('CoachSideNavComponent', () => {
  let component: CoachSideNavComponent;
  let fixture: ComponentFixture<CoachSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
