import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtheletesRowsComponent } from './atheletes-rows.component';

describe('AtheletesRowsComponent', () => {
  let component: AtheletesRowsComponent;
  let fixture: ComponentFixture<AtheletesRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtheletesRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtheletesRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
