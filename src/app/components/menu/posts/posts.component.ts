import { Component } from "@angular/core";
import { Post } from "../../model/post";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class PostsComponent {
  public posts: Post[] = [];

  constructor() {
    this.posts = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    ];
  }
}
