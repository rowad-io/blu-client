import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { HeaderNavigationComponent } from './header-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderBlocksListComponent } from '../header-blocks-list/header-blocks-list.component';

describe('HeaderNavigationComponent', () => {
  let component: HeaderNavigationComponent;
  let fixture: ComponentFixture<HeaderNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderNavigationComponent,
        HeaderBlocksListComponent,
      ],
      imports: [ButtonModule, MatIconModule],
    });
    fixture = TestBed.createComponent(HeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
