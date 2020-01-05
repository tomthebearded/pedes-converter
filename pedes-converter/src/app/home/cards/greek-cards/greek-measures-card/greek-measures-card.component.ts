import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greek-measures-card',
  templateUrl: './greek-measures-card.component.html',
  styleUrls: ['./greek-measures-card.component.css']
})
export class GreekMeasuresCardComponent implements OnInit {

  collapsed: boolean = true;
  greekCardsIds: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleGreekMeasures(): void {
    this.collapsed = !this.collapsed;
  }

  getId(id: number) {
    this.greekCardsIds = [1, 2, 3, 4, 5, 6, 7].filter(i => i !== id);
  }
}
