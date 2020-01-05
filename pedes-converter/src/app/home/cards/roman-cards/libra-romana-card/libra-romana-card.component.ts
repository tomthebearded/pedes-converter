import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { LibraRomana } from '../../../../models/libra-romana';
import { send } from 'q';

@Component({
  selector: 'app-libra-romana-card',
  templateUrl: './libra-romana-card.component.html',
  styleUrls: ['./libra-romana-card.component.css']
})
export class LibraRomanaComponent implements OnInit {

  @Input() romanCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 4;
  libraRomana: LibraRomana = new LibraRomana(true);
  conversionMeasures: string[] = ["g", "kg"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.romanCardsIds.length != 0) {
      if (this.romanCardsIds.find(i => i === this.id) != null) {
        this.libraRomana = new LibraRomana(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundLibraRomanaNumber(): void {
    this.libraRomana.libra = Math.floor(this.libraRomana.libra);
    this.deleteLibraRomanaResult()
  }

  convertLibraRomana(): void {
    let result: number;
    let libra: number = this.libraRomana.libra;

    result = this.libraRomana.measure === "g" ? libra * 327.17 : libra * 0.32717;

    this.libraRomana.result = result.toFixed(3);
  }

  deleteLibraRomanaResult(): void {
    this.libraRomana.result = null;
  }

  toggleLibraRomana() {
    if (this.libraRomana.collapsed) {
      this.libraRomana.collapsed = !this.libraRomana.collapsed;
      this.sendId();
    }
    else
      this.libraRomana = new LibraRomana(true);
  }
}
