import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greek-measures-card',
  templateUrl: './greek-measures-card.component.html',
  styleUrls: ['./greek-measures-card.component.css']
})
export class GreekMeasuresCardComponent implements OnInit {
 
  @Input() cardsIds: number[];
  @Output() messageToEmit = new EventEmitter<number>();

  id: number = 2;
  collapsed: boolean = true;
  greekCardsIds: number[] = [];

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

  toggleGreekMeasures(): void {
    this.collapsed = !this.collapsed;
    this.sendId();
  }

  getId(id: number) {
    this.greekCardsIds = [1, 2, 3, 4, 5, 6, 7].filter(i => i !== id);
  }
}
