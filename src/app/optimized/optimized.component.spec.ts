import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedComponent } from './optimized.component';

describe('OptimizedComponent', () => {
  let component: OptimizedComponent;
  let fixture: ComponentFixture<OptimizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptimizedComponent]
    });
    fixture = TestBed.createComponent(OptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
