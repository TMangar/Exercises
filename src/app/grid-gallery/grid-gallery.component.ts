import {Component, Input, OnInit} from '@angular/core';
import {GalleryModelService} from "../services/gallery-model.service";
import {ImageModel} from "../models/imageModel";

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.css']
})
export class GridGalleryComponent implements OnInit {

  constructor(private galleryService: GalleryModelService) { }
  @Input() galleryModels:ImageModel[];
  public modalImageSource:ImageModel;
  public showModal:boolean;

  ngOnInit(): void {
    this.galleryModels = this.galleryService.GetImageModels()
  }

  openModal(source:ImageModel){
    this.modalImageSource = source;
    this.showModal = true;
    console.log(this.modalImageSource)
  }

  closeModal(){
    this.showModal = false;
  }
}
