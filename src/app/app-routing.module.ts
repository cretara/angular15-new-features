import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/menu/home/home.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "product/:id",
    loadComponent: () =>
      import("../app/components/menu/products/products.component").then(
        (it) => it.ProductsComponent
      ),
  },
  {
    path: "posts",
    loadComponent: () =>
      import("../app/components/menu/posts/posts.component").then(
        (it) => it.PostsComponent
      ),
  },
  {
    path: "posts/:id",
    loadComponent: () =>
      import(
        "../app/components/menu/posts/post-detail/post-detail.component"
      ).then((it) => it.PostDetailComponent),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
