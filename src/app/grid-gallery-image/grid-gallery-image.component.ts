import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../models/imageModel";

@Component({
  selector: 'app-grid-gallery-image',
  templateUrl: './grid-gallery-image.component.html',
  styleUrls: ['./grid-gallery-image.component.css']
})
export class GridGalleryImageComponent implements OnInit {
  @Input() imageSource: ImageModel;
  @Output() openModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.imageSource)
  }
}
