import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { MainViewComponent } from './pages/store-page/views/main-view/main-view.component';

const routes: Routes = [
  {
    path: 'store',
    component: StorePageComponent,
    children: [
      {
        path: '',
        component: MainViewComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/store'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
