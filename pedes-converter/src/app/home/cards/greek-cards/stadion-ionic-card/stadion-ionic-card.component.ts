import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StadionIonic } from 'src/app/models/stadion-ionic';

@Component({
  selector: 'app-stadion-ionic-card',
  templateUrl: './stadion-ionic-card.component.html',
  styleUrls: ['./stadion-ionic-card.component.css']
})
export class StadionIonicCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 6;
  stadionIonic: StadionIonic = new StadionIonic(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.stadionIonic = new StadionIonic(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundStadionIonicNumber(): void {
    this.stadionIonic.stadion = Math.floor(this.stadionIonic.stadion);
    this.deleteStadionIonicResult()
  }

  convertStadionIonic(): void {
    let result: number;
    let stadion: number = this.stadionIonic.stadion;

    result = this.stadionIonic.measure === "m" ? stadion * 208.8 : stadion * 0.2088;
    this.stadionIonic.result = result.toFixed(3);
  }

  deleteStadionIonicResult(): void {
    this.stadionIonic.result = null;
  }

  toggleStadionIonic() {
    if (this.stadionIonic.collapsed) {
      this.stadionIonic.collapsed = !this.stadionIonic.collapsed;
      this.sendId();
    }
    else
    this.stadionIonic = new StadionIonic(true);
  }
}
