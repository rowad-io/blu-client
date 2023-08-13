import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreSearchComponent } from './store-search.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


describe('StoreSearchComponent', () => {
  let component: StoreSearchComponent;
  let fixture: ComponentFixture<StoreSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSearchComponent],
      imports: [ButtonModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(StoreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
