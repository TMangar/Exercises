import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGalleryImageComponent } from './grid-gallery-image.component';

describe('GridGalleryImageComponent', () => {
  let component: GridGalleryImageComponent;
  let fixture: ComponentFixture<GridGalleryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGalleryImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
