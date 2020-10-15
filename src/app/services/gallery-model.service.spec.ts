import { TestBed } from '@angular/core/testing';

import { GalleryModelService } from './gallery-model.service';

describe('GalleryModelService', () => {
  let service: GalleryModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
