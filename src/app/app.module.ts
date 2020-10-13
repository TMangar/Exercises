import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';
import { GridGalleryImageComponent } from './grid-gallery-image/grid-gallery-image.component';
import { GridGalleryModalComponent } from './grid-gallery-modal/grid-gallery-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GridGalleryComponent,
    GridGalleryImageComponent,
    GridGalleryModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
