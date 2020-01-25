import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PedesRomaniCardComponent } from './home/cards/roman-cards/pedes-romani-card/pedes-romani-card.component';
import { PassusRomaniCardComponent } from './home/cards/roman-cards/passus-romani-card/passus-romani-card.component';
import { ModiumRomaniCardComponent } from './home/cards/roman-cards/modium-romani-card/modium-romani-card.component';
import { RomanMeasuresCardComponent } from './home/cards/roman-cards/roman-measures-card/roman-measures-card.component';
import { LibraRomanaComponent } from './home/cards/roman-cards/libra-romana-card/libra-romana-card.component';
import { GreekMeasuresCardComponent } from './home/cards/greek-cards/greek-measures-card/greek-measures-card.component';
import { PousAtticCardComponent } from './home/cards/greek-cards/pous-attic-card/pous-attic-card.component';
import { StadionAtticCardComponent } from './home/cards/greek-cards/stadion-attic-card/stadion-attic-card.component';
import { CotyleCardComponent } from './home/cards/greek-cards/cotyle-card/cotyle-card.component';
import { StadiumRomaniCardComponent } from './home/cards/roman-cards/stadium-romani-card/stadium-romani-card.component';
import { UnciaRomanaCardComponent } from './home/cards/roman-cards/uncia-romana-card/uncia-romana-card.component';
import { ActusRomaniCardComponent } from './home/cards/roman-cards/actus-romani-card/actus-romani-card.component';
import { PousDoricCardComponent } from './home/cards/greek-cards/pous-doric-card/pous-doric-card.component';
import { PousIonicCardComponent } from './home/cards/greek-cards/pous-ionic-card/pous-ionic-card.component';
import { StadionDoricCardComponent } from './home/cards/greek-cards/stadion-doric-card/stadion-doric-card.component';
import { StadionIonicCardComponent } from './home/cards/greek-cards/stadion-ionic-card/stadion-ionic-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    CotyleCardComponent,
    StadiumRomaniCardComponent,
    UnciaRomanaCardComponent,
    ActusRomaniCardComponent,
    PousDoricCardComponent,
    PousIonicCardComponent,
    StadionDoricCardComponent,
    StadionIonicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
