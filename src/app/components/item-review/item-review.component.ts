import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-review',
  templateUrl: './item-review.component.html',
  styleUrls: ['./item-review.component.less']
})
export class ItemReviewComponent implements OnInit {

  pinCodeSelected: number = 1;
  _productSelected: number;
  selectedValue: string;
  formLoader: boolean = true;
  countries: number[] = [423301, 423302, 423303, 423304, 423305, 423306, 423307];
  constructor(route: ActivatedRoute) {
    this.selectedValue = '0';
    this._productSelected = route.snapshot.params['productId'];
  }

  ngOnInit() {
    console.log("==>ItemReviewComponent");
  }

  onSubmit(v) {
    this.formLoader = !this.formLoader;
    console.log("on submit called " + v);
  }

}
