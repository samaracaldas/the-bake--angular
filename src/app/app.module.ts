import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';
import { NovasReceitasComponent } from './novas-receitas/novas-receitas.component';
import { NossoMenuComponent } from './nosso-menu/nosso-menu.component';
import { CombinacaoPerfeitaComponent } from './combinacao-perfeita/combinacao-perfeita.component';
import { DeleiteCulinarioComponent } from './deleite-culinario/deleite-culinario.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NossaHistoriaComponent,
    NovasReceitasComponent,
    NossoMenuComponent,
    CombinacaoPerfeitaComponent,
    DeleiteCulinarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
