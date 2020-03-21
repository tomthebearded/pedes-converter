import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-roman-measures-card',
  templateUrl: './roman-measures-card.component.html',
  styleUrls: ['./roman-measures-card.component.css']
})
export class RomanMeasuresCardComponent implements OnInit {

  @Input() cardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 1;
  collapsed: boolean = false;
  romanCardsIds: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.cardsIds.length != 0) {
      if (this.cardsIds.find(i => i === this.id) != null) {
        this.collapsed = true;
      }
    }
  }

  sendId() {
    this.messageToEmit.emit(this.id);
  }

  toggleRomansMeasures(): void {
    this.collapsed = !this.collapsed;
    this.sendId();
  }

  getId(id: number) {
    this.romanCardsIds = [1, 2, 3, 4, 5, 6, 7].filter(i => i !== id);
  }
}
