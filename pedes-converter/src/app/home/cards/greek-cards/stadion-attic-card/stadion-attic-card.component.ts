import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StadionAttic } from 'src/app/models/stadion-attic';

@Component({
  selector: 'app-stadion-attic-card',
  templateUrl: './stadion-attic-card.component.html',
  styleUrls: ['./stadion-attic-card.component.css']
})
export class StadionAtticCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 2;
  stadionAttic: StadionAttic = new StadionAttic(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.stadionAttic = new StadionAttic(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundStadionAtticNumber(): void {
    this.stadionAttic.stadion = Math.floor(this.stadionAttic.stadion);
    this.deleteStadionAtticResult()
  }

  convertStadionAttic(): void {
    let result: number;
    let stadion: number = this.stadionAttic.stadion;

    result = this.stadionAttic.measure === "m" ? stadion * 176.4 : stadion * 0.1764;
    this.stadionAttic.result = result.toFixed(3);
  }

  deleteStadionAtticResult(): void {
    this.stadionAttic.result = null;
  }

  toggleStadionAttic() {
    if (this.stadionAttic.collapsed) {
      this.stadionAttic.collapsed = !this.stadionAttic.collapsed;
    }
    else
      this.stadionAttic = new StadionAttic(true);
  }
}
