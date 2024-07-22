import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerlyComponentComponent } from './eagerly-component.component';

describe('EagerlyComponentComponent', () => {
  let component: EagerlyComponentComponent;
  let fixture: ComponentFixture<EagerlyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EagerlyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerlyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
