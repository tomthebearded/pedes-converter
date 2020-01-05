import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PousDoric } from 'src/app/models/pous-doric';

@Component({
  selector: 'app-pous-doric-card',
  templateUrl: './pous-doric-card.component.html',
  styleUrls: ['./pous-doric-card.component.css']
})
export class PousDoricCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 3;
  pousDoric: PousDoric = new PousDoric(true);
  conversionMeasures: string[] = ["cm", "m"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.pousDoric = new PousDoric(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundPousDoricNumber(): void {
    this.pousDoric.pous = Math.floor(this.pousDoric.pous);
    this.deletePousDoricResult()
  }

  convertPousDoric(): void {
    let result: number;
    let pous: number = this.pousDoric.pous;

    result = this.pousDoric.measure === "cm" ? pous * 32.6 : pous * 0.326;
    this.pousDoric.result = result.toFixed(3);
  }

  deletePousDoricResult(): void {
    this.pousDoric.result = null;
  }

  togglePousDoric() {
    if (this.pousDoric.collapsed) {
      this.pousDoric.collapsed = !this.pousDoric.collapsed;
    }
    else
      this.pousDoric = new PousDoric(true);
  }
}
