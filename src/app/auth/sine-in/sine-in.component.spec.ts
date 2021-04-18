import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SineInComponent } from './sine-in.component';

describe('SineInComponent', () => {
  let component: SineInComponent;
  let fixture: ComponentFixture<SineInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SineInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SineInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
