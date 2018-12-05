import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  //this lifecycle method only watches for changes to input properties
  ngOnChanges(): void {
    this.starWidth = this.rating * (75 / 5);
  }

  onStarClicked() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}