import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePromotionsComponent } from './store-promotions.component';

describe('StorePromotionsComponent', () => {
  let component: StorePromotionsComponent;
  let fixture: ComponentFixture<StorePromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorePromotionsComponent]
    });
    fixture = TestBed.createComponent(StorePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
