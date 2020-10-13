import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGalleryModalComponent } from './grid-gallery-modal.component';

describe('GridGalleryModalComponent', () => {
  let component: GridGalleryModalComponent;
  let fixture: ComponentFixture<GridGalleryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGalleryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGalleryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
