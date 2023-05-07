import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyimage.component.html',
})
export class LazyimageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error('Url property is required');
  }
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';
  public hasLoaded: boolean = false;
  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }
}
