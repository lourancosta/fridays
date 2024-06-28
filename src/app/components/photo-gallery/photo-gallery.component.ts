import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
  @Input() images!: [];
  @Input() firstImage?: string;

  galleryImages: [] = [];

  constructor() { }

  async ngOnInit() {
    this.galleryImages = this.images;
  }

  changeThumbImage(index: number, images: string[]) {
    let thumb: any = document.querySelector('.thumb');
    thumb.src = images[index]
  }
}
