import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLogoComponent } from './store-logo.component';

describe('StoreLogoComponent', () => {
  let component: StoreLogoComponent;
  let fixture: ComponentFixture<StoreLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreLogoComponent]
    });
    fixture = TestBed.createComponent(StoreLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
