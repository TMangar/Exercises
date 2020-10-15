import { Component } from '@angular/core';
import {ImageModel} from "./models/imageModel";
import {GalleryModelService} from "./services/gallery-model.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-gallery-modal';
  public galleryModels: ImageModel[];
  constructor(private galleryService: GalleryModelService) {
  }

  ngOnInit(){
    this.galleryModels = this.galleryService.GetImageModels()
  }
}
