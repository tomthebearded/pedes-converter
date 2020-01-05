import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnciaRomana } from 'src/app/models/uncia-romana';

@Component({
  selector: 'app-uncia-romana-card',
  templateUrl: './uncia-romana-card.component.html',
  styleUrls: ['./uncia-romana-card.component.css']
})
export class UnciaRomanaCardComponent implements OnInit {

  @Input() romanCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 7;
  unciaRomana: UnciaRomana = new UnciaRomana(true);
  conversionMeasures: string[] = ["g", "kg"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.romanCardsIds.length != 0) {
      if (this.romanCardsIds.find(i => i === this.id) != null) {
        this.unciaRomana = new UnciaRomana(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundUnciaRomanaNumber(): void {
    this.unciaRomana.uncia = Math.floor(this.unciaRomana.uncia);
    this.deleteUnciaRomanaResult()
  }

  convertUnciaRomana(): void {
    let result: number;
    let uncia: number = this.unciaRomana.uncia;

    result = this.unciaRomana.measure === "g" ? uncia * 27.4 : uncia * 0.0274;

    this.unciaRomana.result = result.toFixed(3);
  }

  deleteUnciaRomanaResult(): void {
    this.unciaRomana.result = null;
  }

  toggleUnciaRomana() {
    if (this.unciaRomana.collapsed) {
      this.unciaRomana.collapsed = !this.unciaRomana.collapsed;
      this.sendId();
    } else
      this.unciaRomana = new UnciaRomana(true);
  }
}
