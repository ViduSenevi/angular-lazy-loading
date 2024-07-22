import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLazyComponent } from './with-lazy.component';

describe('WithLazyComponent', () => {
  let component: WithLazyComponent;
  let fixture: ComponentFixture<WithLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithLazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
