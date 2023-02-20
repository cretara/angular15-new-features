import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/menu/home/home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../app/components/menu/products/products.component').then(
        (it) => it.ProductsComponent
      ),
  },
  {path: '', redirectTo: "home", pathMatch: "full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
