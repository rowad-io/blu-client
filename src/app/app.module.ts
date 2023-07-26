import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

import { AppComponent } from './app.component';
import { StoreHeaderComponent } from './sections/store-header/store-header.component';
import { StorePromotionsComponent } from './sections/store-promotions/store-promotions.component';
import { StoreCategoriesComponent } from './sections/store-categories/store-categories.component';
import { StoreFooterComponent } from './sections/store-footer/store-footer.component';
import { StoreSidebarComponent } from './sections/store-sidebar/store-sidebar.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { StoreSearchComponent } from './components/store-search/store-search.component';
import { HeaderBlocksItemComponent } from './components/header-blocks-item/header-blocks-item.component';
import { HeaderBlocksListComponent } from './components/header-blocks-list/header-blocks-list.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { MainViewComponent } from './pages/store-page/views/main-view/main-view.component';
import { StoreLogoComponent } from './components/store-logo/store-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreHeaderComponent,
    StorePromotionsComponent,
    StoreCategoriesComponent,
    StoreFooterComponent,
    StoreSidebarComponent,
    StorePageComponent,
    StoreSearchComponent,
    HeaderBlocksItemComponent,
    HeaderBlocksListComponent,
    HeaderNavigationComponent,
    MainViewComponent,
    StoreLogoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    MegaMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
