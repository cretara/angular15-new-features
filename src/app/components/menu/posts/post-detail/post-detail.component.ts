import { Component } from "@angular/core";
import { initialPost, Post } from "../../../model/post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"],
})
export class PostDetailComponent {
  public post: Post = initialPost;
}
