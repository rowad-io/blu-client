import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePageComponent } from './store-page.component';
import { StoreSidebarComponent } from 'src/app/sections/store-sidebar/store-sidebar.component';
import { StoreHeaderComponent } from 'src/app/sections/store-header/store-header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { StoreLogoComponent } from 'src/app/components/store-logo/store-logo.component';
import { StoreSearchComponent } from 'src/app/components/store-search/store-search.component';
import { HeaderBlocksListComponent } from 'src/app/components/header-blocks-list/header-blocks-list.component';
import { HeaderNavigationComponent } from 'src/app/components/header-navigation/header-navigation.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

describe('StorePageComponent', () => {
  let component: StorePageComponent;
  let fixture: ComponentFixture<StorePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        ButtonModule,
        MatIconModule,
        ReactiveFormsModule,
      ],
      declarations: [
        StoreSidebarComponent,
        StorePageComponent,
        StoreHeaderComponent,
        StoreLogoComponent,
        StoreSearchComponent,
        HeaderBlocksListComponent,
        HeaderNavigationComponent,
      ]
    });
    fixture = TestBed.createComponent(StorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
