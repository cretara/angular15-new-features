import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

interface Cat {
  id: string,
  url: string,
  width: number,
  height: number,
}

/**
 *
 * @returns {Promise<Response>}
 */
async function generateAPICallError() {
  return fetch("https://my-domain.com")
}

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage]
})
export class CatBlogComponent {
  public readonly catList: Cat[] = [
    {
      "id": "382",
      "url": "https://cdn2.thecatapi.com/images/382.jpg",
      "width": 580,
      "height": 812
    },
    {
      "id": "7ca",
      "url": "https://cdn2.thecatapi.com/images/7ca.jpg",
      "width": 500,
      "height": 333
    },
    {
      "id": "af6",
      "url": "https://cdn2.thecatapi.com/images/af6.jpg",
      "width": 1280,
      "height": 960
    },
    {
      "id": "bg8",
      "url": "https://cdn2.thecatapi.com/images/bg8.jpg",
      "width": 500,
      "height": 335
    },
    {
      "id": "d2g",
      "url": "https://cdn2.thecatapi.com/images/d2g.gif",
      "width": 499,
      "height": 327
    },
    {
      "id": "dkc",
      "url": "https://cdn2.thecatapi.com/images/dkc.jpg",
      "width": 810,
      "height": 540
    },
    {
      "id": "dro",
      "url": "https://cdn2.thecatapi.com/images/dro.jpg",
      "width": 604,
      "height": 403
    },
    {
      "id": "MTc0NjYyOA",
      "url": "https://cdn2.thecatapi.com/images/MTc0NjYyOA.gif",
      "width": 500,
      "height": 251
    },
    {
      "id": "MjAyMjM3NA",
      "url": "https://cdn2.thecatapi.com/images/MjAyMjM3NA.jpg",
      "width": 720,
      "height": 960
    },
    {
      "id": "QUdOiX2hP",
      "url": "https://cdn2.thecatapi.com/images/QUdOiX2hP.jpg",
      "width": 768,
      "height": 1024
    }
  ]

  async generateError() {
    await generateAPICallError();
  }


}
