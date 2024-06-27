import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

  ngOnInit() {
    this.galleryImages = this.images;

    // this.changeThumbImage(this.galleryImages);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeThumbImage();
  }

  changeThumbImage() {
    let thumb: any = document.querySelector('img.thumb');
    let imgSmall: any = document.querySelectorAll('img.img-small');

    imgSmall.forEach(function(el: any) {
      el.addEventListener('click', function () {
        thumb.src = el.src;
      });
    });
  }

}
