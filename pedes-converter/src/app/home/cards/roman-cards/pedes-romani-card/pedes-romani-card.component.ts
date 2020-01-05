import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PedesRomani } from '../../../../models/pedes-romani';

@Component({
  selector: 'app-pedes-romani-card',
  templateUrl: './pedes-romani-card.component.html',
  styleUrls: ['./pedes-romani-card.component.css']
})

export class PedesRomaniCardComponent implements OnInit {

  @Input() romanCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 2;
  pedesRomani: PedesRomani = new PedesRomani(false);
  conversionMeasures: string[] = ["cm", "m"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.romanCardsIds.length != 0) {
      if (this.romanCardsIds.find(i => i === this.id) != null) {
        this.pedesRomani = new PedesRomani(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundPedesRomaniNumber(): void {
    this.pedesRomani.pedes = Math.floor(this.pedesRomani.pedes);
    this.deletePedesRomaniResult()
  }

  convertPedesRomani(): void {
    let result: number;
    let pedes: number = this.pedesRomani.pedes;

    if (this.pedesRomani.semis)
      pedes = pedes + 0.5;

    result = this.pedesRomani.measure === "cm" ? pedes * 29.6 : pedes * 0.296;
    this.pedesRomani.result = result.toFixed(3);
  }

  deletePedesRomaniResult(): void {
    this.pedesRomani.result = null;
  }

  togglePedesRomani() {
    if (this.pedesRomani.collapsed) {
      this.pedesRomani.collapsed = !this.pedesRomani.collapsed;
      this.sendId();
    }
    else {
      this.pedesRomani = new PedesRomani(true);
    }
  }
}
