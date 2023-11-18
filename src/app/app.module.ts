import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { CommonModule } from '@angular/common';
import { faUser, faHeart, faJ} from '@fortawesome/free-solid-svg-icons';
import { ProjectsComponent } from './components/projects/projects.component';
import { LenguangesCarouselComponent } from './components/introduction/lenguanges-carousel/lenguanges-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    IntroductionComponent,
    PortfolioMainComponent,
    ProjectsComponent,
    LenguangesCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faFile, faUser, faHeart);
  }
}
