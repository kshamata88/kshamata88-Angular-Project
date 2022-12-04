import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;

  @Output()
  ratingClick = new EventEmitter<number>();

  starwidth = 0;

  constructor() {}

  ngOnChanges(): void {
  this.starwidth = this.rating * 16;
}

ratingClicked():void{
  this.ratingClick.emit(this.rating);
}
}
