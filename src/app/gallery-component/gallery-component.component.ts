import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from "../models/imageModel";

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.css']
})
export class GalleryComponentComponent implements OnInit {
  @Input() imageModels: ImageModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
