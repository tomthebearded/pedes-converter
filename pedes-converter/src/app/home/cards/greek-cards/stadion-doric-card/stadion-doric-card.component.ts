import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StadionDoric } from 'src/app/models/stadion-doric';

@Component({
  selector: 'app-stadion-doric-card',
  templateUrl: './stadion-doric-card.component.html',
  styleUrls: ['./stadion-doric-card.component.css']
})
export class StadionDoricCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 6;
  stadionDoric: StadionDoric = new StadionDoric(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.stadionDoric = new StadionDoric(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundStadionDoricNumber(): void {
    this.stadionDoric.stadion = Math.floor(this.stadionDoric.stadion);
    this.deleteStadionDoricResult()
  }

  convertStadionDoric(): void {
    let result: number;
    let stadion: number = this.stadionDoric.stadion;

    result = this.stadionDoric.measure === "m" ? stadion * 195.6 : stadion * 0.1956;
    this.stadionDoric.result = result.toFixed(3);
  }

  deleteStadionDoricResult(): void {
    this.stadionDoric.result = null;
  }

  toggleStadionDoric() {
    if (this.stadionDoric.collapsed) {
      this.stadionDoric.collapsed = !this.stadionDoric.collapsed;
      this.sendId();
    }
    else
      this.stadionDoric = new StadionDoric(true);
  }
}
