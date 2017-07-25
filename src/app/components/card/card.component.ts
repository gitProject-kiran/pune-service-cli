import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  value: string = "";
  cardContainer: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  titleStyle = 'red-title';
  constructor() { }

  ngOnInit() {
  }


  getImage(card): string {
    return '../../../../assets/images/products/' + card + '.jpg';
  }
}
