import { Component, OnInit } from '@angular/core';
import { StadionAttic } from 'src/app/models/stadion-attic';

@Component({
  selector: 'app-stadion-attic-card',
  templateUrl: './stadion-attic-card.component.html',
  styleUrls: ['./stadion-attic-card.component.css']
})
export class StadionAtticCardComponent implements OnInit {

  stadionAttic: StadionAttic = new StadionAttic(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  roundStadionAtticNumber(): void {
    this.stadionAttic.stadion = Math.floor(this.stadionAttic.stadion);
    this.deleteStadionAtticResult()
  }

  convertStadionAttic(): void {
    let result: number;
    let stadion: number = this.stadionAttic.stadion;

    result = this.stadionAttic.measure === "m" ? stadion * 185 : stadion * 0.185;
    this.stadionAttic.result = result.toFixed(3);
  }

  deleteStadionAtticResult(): void {
    this.stadionAttic.result = null;
  }

  toggleStadionAttic() {
    if (this.stadionAttic.collapsed)
      this.stadionAttic.collapsed = !this.stadionAttic.collapsed;
    else
      this.stadionAttic = new StadionAttic(true);
  }
}
