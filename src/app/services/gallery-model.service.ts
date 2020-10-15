import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryModelService {

  constructor() { }

  GetImageModels() {
    return [{source: "https://source.unsplash.com/NRz7SfpnqUM", description: "Tower Bridge, London by Shannon Tremaine"},
      {source: "https://source.unsplash.com/KrNuV_xJJWI", description: "Photo by Eberhard Grossgasteiger"},
      {source: "https://source.unsplash.com/Wm4vaMmHwS0", description: "Photo by Nathan Dumlao"},
      {source: "https://source.unsplash.com/CN_42yx-2Xo", description: "Photo by Casey Horner"},
      {source: "https://source.unsplash.com/FHHpOkaX_cQ", description: "Karersee, Italy by Renato Pozzi"},
      {source: "https://source.unsplash.com/DlkF4-dbCOU", description: "Moraine Lake, Canada by Garrett Parker"},
      {source: "https://source.unsplash.com/0LU4vO5iFpM", description: "Tony Grove Lake, United States by Greg Rakozy"},
      {source: "https://source.unsplash.com/in9-n0JwgZ0", description: "Photo by Breno Machado"},
      {source: "https://source.unsplash.com/mtu6m_nLFQI", description: "Photo by SHTTEFAN"},
      {source: "https://source.unsplash.com/qnjKufYqIIE", description: "Orchid Magu, Maldives by Ibrahim Mushan"},
      {source: "https://source.unsplash.com/5eYdj1ZTOlc", description: "Spitzbergen, Svalbard und Jan Mayen by Patrick Schneider"},
      {source: "https://source.unsplash.com/G0miZ5OYaXI", description: "Cloef Viewpoint by Eric Jacob"},
      {source: "https://source.unsplash.com/XAxEp-NKBiQ", description: "Photo by Eberhard Grossgasteiger"},
      {source: "https://source.unsplash.com/GZd3l4Yxdxs", description: "Photo by Leon Overweel"},
      {source: "https://source.unsplash.com/46dgbaKZTjk", description: "Photo by Axi Aimee"},
      {source: "https://source.unsplash.com/1ZOyYPOBn7I", description: "Blue Pond, Hokkaido by Jarrett Kow"},
      {source: "https://source.unsplash.com/0qDTbpVdecE", description: "Shibuya, Japan by Andre Benz"}];
  }
}
