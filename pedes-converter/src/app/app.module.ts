import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PedesRomaniCardComponent } from './home/cards/pedes-romani-card/pedes-romani-card.component';
import { PassusRomaniCardComponent } from './home/cards/passus-romani-card/passus-romani-card.component';
import { ModiumRomaniCardComponent } from './home/cards/modium-romani-card/modium-romani-card.component';
import { RomanMeasuresCardComponent } from './home/cards/roman-measures-card/roman-measures-card.component';
import { LibraRomanaComponent } from './home/cards/libra-romana-card/libra-romana-card.component';
import { GreekMeasuresCardComponent } from './home/cards/greek-measures-card/greek-measures-card.component';
import { PousAtticCardComponent } from './home/cards/pous-attic-card/pous-attic-card.component';
import { StadionAtticCardComponent } from './home/cards/stadion-attic-card/stadion-attic-card.component';
import { CotyleCardComponent } from './home/cards/cotyle-card/cotyle-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    PedesRomaniCardComponent,
    PassusRomaniCardComponent,
    ModiumRomaniCardComponent,
    RomanMeasuresCardComponent,
    LibraRomanaComponent,
    GreekMeasuresCardComponent,
    PousAtticCardComponent,
    StadionAtticCardComponent,
    CotyleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
