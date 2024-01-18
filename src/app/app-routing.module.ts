import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './store/pages/search-bar/search-bar.component';
import { SearchListComponent } from './store/pages/search-list/search-list.component';
import { SearchDetailComponent } from './store/pages/search-detail/search-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
