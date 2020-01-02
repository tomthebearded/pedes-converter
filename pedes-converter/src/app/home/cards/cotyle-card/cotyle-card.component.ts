import { Component, OnInit } from '@angular/core';
import { Cotyle } from 'src/app/models/cotyle';

@Component({
  selector: 'app-cotyle-card',
  templateUrl: './cotyle-card.component.html',
  styleUrls: ['./cotyle-card.component.css']
})
export class CotyleCardComponent implements OnInit {

  cotyle: Cotyle = new Cotyle(true);
  conversionMeasures: string[] = ["l"];

  constructor() { }

  ngOnInit() {
  }

  roundCotyleNumber(): void {
    this.cotyle.cotyle = Math.floor(this.cotyle.cotyle);
    this.deleteCotyleResult()
  }

  convertCotyle(): void {
    let result: number;

    result = this.cotyle.cotyle * 0.276;
    this.cotyle.result = result.toFixed(3);
  }

  deleteCotyleResult(): void {
    this.cotyle.result = null;
  }

  toggleCotyle() {
    if (this.cotyle.collapsed)
      this.cotyle.collapsed = !this.cotyle.collapsed;
    else
      this.cotyle = new Cotyle(true);
  }
}
