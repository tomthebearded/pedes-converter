import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PousIonic } from 'src/app/models/pous-ionic';

@Component({
  selector: 'app-pous-ionic-card',
  templateUrl: './pous-ionic-card.component.html',
  styleUrls: ['./pous-ionic-card.component.css']
})
export class PousIonicCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 4;
  pousIonic: PousIonic = new PousIonic(true);
  conversionMeasures: string[] = ["cm", "m"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.pousIonic = new PousIonic(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundPousIonicNumber(): void {
    this.pousIonic.pous = Math.floor(this.pousIonic.pous);
    this.deletePousIonicResult()
  }

  convertPousIonic(): void {
    let result: number;
    let pous: number = this.pousIonic.pous;

    result = this.pousIonic.measure === "cm" ? pous * 34.8 : pous * 0.348;
    this.pousIonic.result = result.toFixed(3);
  }

  deletePousIonicResult(): void {
    this.pousIonic.result = null;
  }

  togglePousIonic() {
    if (this.pousIonic.collapsed) {
      this.pousIonic.collapsed = !this.pousIonic.collapsed;
    }
    else
      this.pousIonic = new PousIonic(true);
  }

}
