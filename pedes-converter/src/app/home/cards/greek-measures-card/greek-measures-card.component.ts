import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greek-measures-card',
  templateUrl: './greek-measures-card.component.html',
  styleUrls: ['./greek-measures-card.component.css']
})
export class GreekMeasuresCardComponent implements OnInit {

  collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleGreekMeasures(): void {
    this.collapsed = !this.collapsed;
  }
}
