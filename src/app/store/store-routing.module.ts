import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchBarComponent } from "./pages/search-bar/search-bar.component";
import { SearchListComponent } from "./pages/search-list/search-list.component";
import { SearchDetailComponent } from "./pages/search-detail/search-detail.component";

const routes: Routes = [
  {
    path: '',
    component: SearchBarComponent,
  },
  {
    path: 'items',
    component: SearchListComponent,
  },
  {
    path: 'items/:id',
    component: SearchDetailComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
