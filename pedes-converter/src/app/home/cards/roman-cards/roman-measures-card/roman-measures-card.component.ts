import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-measures-card',
  templateUrl: './roman-measures-card.component.html',
  styleUrls: ['./roman-measures-card.component.css']
})
export class RomanMeasuresCardComponent implements OnInit {

  collapsed: boolean = false;
  romanCardsIds: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleRomansMeasures(): void {
    this.collapsed = !this.collapsed;
  }

  getId(id: number) {
    this.romanCardsIds = [1, 2, 3, 4, 5, 6, 7].filter(i => i !== id);
  }
}
