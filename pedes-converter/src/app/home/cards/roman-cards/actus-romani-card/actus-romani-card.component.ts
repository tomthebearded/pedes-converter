import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActusRomani } from 'src/app/models/actus-romani';

@Component({
  selector: 'app-actus-romani-card',
  templateUrl: './actus-romani-card.component.html',
  styleUrls: ['./actus-romani-card.component.css']
})
export class ActusRomaniCardComponent implements OnInit {

  @Input() romanCardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 3;
  actusRomani: ActusRomani = new ActusRomani(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.romanCardsIds.length != 0) {
      if (this.romanCardsIds.find(i => i === this.id) != null) {
        this.actusRomani = new ActusRomani(true);
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  roundActusRomaniNumber(): void {
    this.actusRomani.actus = Math.floor(this.actusRomani.actus);
    this.deleteActusRomaniResult()
  }

  convertActusRomani(): void {
    let result: number;
    let actus: number = this.actusRomani.actus;

    if (this.actusRomani.semis)
      actus = actus + 0.5;

    result = this.actusRomani.measure === "m" ? actus * 35.52 : actus * 0.03552;
    this.actusRomani.result = result.toFixed(3);
  }

  toggleSemis(): void {
    this.actusRomani.semis = !this.actusRomani.semis;
    this.deleteActusRomaniResult();
  }

  deleteActusRomaniResult(): void {
    this.actusRomani.result = null;
  }

  toggleActusRomani() {
    if (this.actusRomani.collapsed) {
      this.actusRomani.collapsed = !this.actusRomani.collapsed;
      this.sendId();
    }
    else
      this.actusRomani = new ActusRomani(true);
  }

}
