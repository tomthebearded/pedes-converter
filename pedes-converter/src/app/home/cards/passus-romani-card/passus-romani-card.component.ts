import { Component, OnInit } from '@angular/core';
import { PassusRomani } from '../../../models/passus-romani';

@Component({
  selector: 'app-passus-romani-card',
  templateUrl: './passus-romani-card.component.html',
  styleUrls: ['./passus-romani-card.component.css']
})
export class PassusRomaniCardComponent implements OnInit {

  passusRomani: PassusRomani = new PassusRomani(true);
  conversionMeasures: string[] = ["m", "km"];

  constructor() { }

  ngOnInit() {
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

  togglePassusRomani(){
    if(this.passusRomani.collapsed)
      this.passusRomani.collapsed = !this.passusRomani.collapsed;
    else
      this.passusRomani = new PassusRomani(true);
  }
}
