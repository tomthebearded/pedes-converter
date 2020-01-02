import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-measures-card',
  templateUrl: './roman-measures-card.component.html',
  styleUrls: ['./roman-measures-card.component.css']
})
export class RomanMeasuresCardComponent implements OnInit {

  collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleRomansMeasures(): void {
    this.collapsed = !this.collapsed;
  }

}
