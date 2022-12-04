import { Component, OnInit } from '@angular/core';
import { Review } from '../review';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewForm = new Review();

  ratings = [1,2,3,4,5];

  constructor() {
    this.reviewForm.rating=4;
   }

  ngOnInit(): void {
  }

  submitReview():void{
  }



}
