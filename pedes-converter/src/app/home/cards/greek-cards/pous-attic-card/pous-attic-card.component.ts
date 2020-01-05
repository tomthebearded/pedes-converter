import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PousAttic } from 'src/app/models/pous-attic';

@Component({
  selector: 'app-pous-attic-card',
  templateUrl: './pous-attic-card.component.html',
  styleUrls: ['./pous-attic-card.component.css']
})
export class PousAtticCardComponent implements OnInit {

  @Input() greekCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 7;
  pousAttic: PousAttic = new PousAttic(true);
  conversionMeasures: string[] = ["cm", "m"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.greekCardsIds.length != 0) {
      if (this.greekCardsIds.find(i => i === this.id) != null) {
        this.pousAttic = new PousAttic(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundPousAtticNumber(): void {
    this.pousAttic.pous = Math.floor(this.pousAttic.pous);
    this.deletePousAtticResult()
  }

  convertPousAttic(): void {
    let result: number;
    let pous: number = this.pousAttic.pous;

    result = this.pousAttic.measure === "cm" ? pous * 29.4 : pous * 0.294;
    this.pousAttic.result = result.toFixed(3);
  }

  deletePousAtticResult(): void {
    this.pousAttic.result = null;
  }

  togglePousAttic() {
    if (this.pousAttic.collapsed) {
      this.pousAttic.collapsed = !this.pousAttic.collapsed;
    }
    else
      this.pousAttic = new PousAttic(true);
  }
}
