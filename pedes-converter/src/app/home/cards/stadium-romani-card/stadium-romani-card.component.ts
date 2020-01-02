import { Component, OnInit } from '@angular/core';
import { StadiumRomani } from 'src/app/models/stadium-romani';

@Component({
  selector: 'app-stadium-romani-card',
  templateUrl: './stadium-romani-card.component.html',
  styleUrls: ['./stadium-romani-card.component.css']
})
export class StadiumRomaniCardComponent implements OnInit {

  stadiumRomani: StadiumRomani = new StadiumRomani(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
  }

  roundStadiumRomaniNumber(): void {
    this.stadiumRomani.stadium = Math.floor(this.stadiumRomani.stadium);
    this.deleteStadiumRomaniResult()
  }

  convertStadiumRomani(): void {
    let result: number;
    let stadium: number = this.stadiumRomani.stadium;

    result = this.stadiumRomani.measure === "m" ? stadium * 185 : stadium * 0.185;
    this.stadiumRomani.result = result.toFixed(3);
  }

  deleteStadiumRomaniResult(): void {
    this.stadiumRomani.result = null;
  }

  toggleStadiumRomani() {
    if (this.stadiumRomani.collapsed)
      this.stadiumRomani.collapsed = !this.stadiumRomani.collapsed;
    else
      this.stadiumRomani = new StadiumRomani(true);
  }
}
