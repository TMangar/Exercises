import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.css']
})
export class GridGalleryComponent implements OnInit {

  constructor() { }
  public modalImageSource:string;
  public showModal:boolean;

  ngOnInit(): void {
  }

  openModal(source:string){
    this.modalImageSource = source;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
}
