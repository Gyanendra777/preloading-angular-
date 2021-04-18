import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UderComponent } from './uder.component';

describe('UderComponent', () => {
  let component: UderComponent;
  let fixture: ComponentFixture<UderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
