import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { StoreSidebarComponent } from './store-sidebar.component';

describe('StoreSidebarComponent', () => {
  let component: StoreSidebarComponent;
  let fixture: ComponentFixture<StoreSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSidebarComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(StoreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
