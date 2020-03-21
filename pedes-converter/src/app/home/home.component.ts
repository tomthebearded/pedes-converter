import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardsIds: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  getId(id: number) {
    this.cardsIds = [1, 2].filter(i => i !== id);
  }
}
