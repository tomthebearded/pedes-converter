import { Component, OnInit } from '@angular/core';
import { ModiumRomani } from '../../../models/modium-romani';

@Component({
  selector: 'app-modium-romani-card',
  templateUrl: './modium-romani-card.component.html',
  styleUrls: ['./modium-romani-card.component.css']
})
export class ModiumRomaniCardComponent implements OnInit {

  modiumRomani: ModiumRomani = new ModiumRomani(true);
  conversionMeasures: string[] = ["l", "kg"];

  constructor() { }

  ngOnInit() {
  }

  roundModiumRomaniNumber(): void {
    this.modiumRomani.modium = Math.floor(this.modiumRomani.modium);
    this.deleteModiumRomaniResult()
  }

  convertModiumRomani(): void {
    let result: number;

    result = this.modiumRomani.measure === "l" ? this.modiumRomani.modium * 8.733 : this.modiumRomani.modium * 6.67;
    this.modiumRomani.result = result.toFixed(3);
  }

  deleteModiumRomaniResult(): void {
    this.modiumRomani.result = null;
  }

  toggleModiumRomani() {
    if (this.modiumRomani.collapsed)
      this.modiumRomani.collapsed = !this.modiumRomani.collapsed;
    else
      this.modiumRomani = new ModiumRomani(true);
  }
}