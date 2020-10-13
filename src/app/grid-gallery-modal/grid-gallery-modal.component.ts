import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grid-gallery-modal',
  templateUrl: './grid-gallery-modal.component.html',
  styleUrls: ['./grid-gallery-modal.component.css']
})
export class GridGalleryModalComponent implements OnInit {
  @Input() imageSource: string;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeModal.emit();
  }
}
