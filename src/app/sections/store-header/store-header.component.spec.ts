import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHeaderComponent } from './store-header.component';
import { StoreLogoComponent } from 'src/app/components/store-logo/store-logo.component';
import { StoreSearchComponent } from 'src/app/components/store-search/store-search.component';
import { HeaderBlocksListComponent } from 'src/app/components/header-blocks-list/header-blocks-list.component';
import { HeaderNavigationComponent } from 'src/app/components/header-navigation/header-navigation.component';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('StoreHeaderComponent', () => {
  let component: StoreHeaderComponent;
  let fixture: ComponentFixture<StoreHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule, MatIconModule, ReactiveFormsModule],
      declarations: [
        StoreHeaderComponent,
        StoreLogoComponent,
        StoreSearchComponent,
        HeaderBlocksListComponent,
        HeaderNavigationComponent,
      ]
    });
    fixture = TestBed.createComponent(StoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
