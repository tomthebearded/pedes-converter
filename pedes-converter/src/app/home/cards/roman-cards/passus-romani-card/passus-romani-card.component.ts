import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PassusRomani } from '../../../../models/passus-romani';

@Component({
  selector: 'app-passus-romani-card',
  templateUrl: './passus-romani-card.component.html',
  styleUrls: ['./passus-romani-card.component.css']
})
export class PassusRomaniCardComponent implements OnInit {

  @Input() romanCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 1;
  passusRomani: PassusRomani = new PassusRomani(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.romanCardsIds.length != 0) {
      if (this.romanCardsIds.find(i => i === this.id) != null) {
        this.passusRomani = new PassusRomani(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundPassusRomaniNumber(): void {
    this.passusRomani.passus = Math.floor(this.passusRomani.passus);
    this.deletePassusRomaniResult()
  }

  convertPassusRomani(): void {
    let result: number;
    let passus: number = this.passusRomani.passus;

    if (this.passusRomani.semis)
      passus = passus + 0.5;

    result = this.passusRomani.measure === "m" ? passus * 1.48 : passus * 0.00148;
    this.passusRomani.result = result.toFixed(3);
  }

  deletePassusRomaniResult(): void {
    this.passusRomani.result = null;
  }

  togglePassusRomani() {
    if (this.passusRomani.collapsed) {
      this.passusRomani.collapsed = !this.passusRomani.collapsed;
      this.sendId();
    }
    else {
      this.passusRomani = new PassusRomani(true);
    }
  }
}
