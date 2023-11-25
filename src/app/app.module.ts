import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { faUser, faHeart, faJ, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { ProjectsComponent } from './components/projects/projects.component';
import { LenguangesCarouselComponent } from './components/introduction/lenguanges-carousel/lenguanges-carousel.component';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';
import { DetailProjectComponent } from './components/projects/detail-project/detail-project.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    IntroductionComponent,
    PortfolioMainComponent,
    ProjectsComponent,
    LenguangesCarouselComponent,
    DownloadResumeComponent,
    DetailProjectComponent,
    ProjectComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faArrowDown, faUser, faHeart);
  }
}
