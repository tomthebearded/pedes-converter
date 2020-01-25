import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'pedes-converter';
  deferredPrompt: any;
  showButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:beforeinstallprompt', ['$event']) onbeforeinstallprompt(e): void {
    this.deferredPrompt = e;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then(() => {
        this.deferredPrompt = null;
      });
  }

  addToHomeScreen(): void {
    this.showButton = false;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then(() => {
        this.deferredPrompt = null;
      });
  }
}
