import { Component, OnInit } from '@angular/core';
import { LibraRomana } from '../../../models/libra-romana';

@Component({
  selector: 'app-libra-romana-card',
  templateUrl: './libra-romana-card.component.html',
  styleUrls: ['./libra-romana-card.component.css']
})
export class LibraRomanaComponent implements OnInit {

  libraRomana: LibraRomana = new LibraRomana(true);
  conversionMeasures: string[] = ["g", "kg"];

  constructor() { }

  ngOnInit() {
  }

  roundLibraRomanaNumber(): void {
    this.libraRomana.libra = Math.floor(this.libraRomana.libra);
    this.deleteLibraRomanaResult()
  }

  convertLibraRomana(): void {
    let result: number;
    let libra: number = this.libraRomana.libra;

    result = this.libraRomana.measure === "g" ? libra * 327.17 : libra * 0.327;

    this.libraRomana.result = result.toFixed(3);
  }

  deleteLibraRomanaResult(): void {
    this.libraRomana.result = null;
  }

  toggleLibraRomana() {
    if (this.libraRomana.collapsed)
      this.libraRomana.collapsed = !this.libraRomana.collapsed;
    else
      this.libraRomana = new LibraRomana(true);
  }
}
