import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  //! = NOT NULL OPERATOR - siempre va a haber un valor -
  constructor(private gifService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.resetSearchTag();
  }
  resetSearchTag(): void {
    this.tagInput.nativeElement.value = '';
  }
}
