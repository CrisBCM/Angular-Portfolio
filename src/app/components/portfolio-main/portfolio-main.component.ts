import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent{
  viewportInSection:string = "introduction";
  @ViewChild('introduction') introductionComp!:IntroductionComponent;
  @ViewChild('projects') projectsComp!:ProjectsComponent;
  @ViewChild('contactMe') contactMeComp!:ContactMeComponent;
  introductionRec:any;
  projectsRec:any;
  contactMeRec:any;

  constructor(private viewportScroller: ViewportScroller){
    this.scrollToIntroduction();
  }

  @HostListener('window:scroll', [])
  onScroll(){
    this.introductionRec = this.introductionComp.mainElement.nativeElement.getBoundingClientRect();
    this.projectsRec = this.projectsComp.projectsMain.nativeElement.getBoundingClientRect();
    this.contactMeRec = this.contactMeComp.contactMeSection.nativeElement.getBoundingClientRect();

    // console.log(this.projectsRec.top + "TOP DE PROJECTS")
    if(this.introductionRec.top <= 0) this.viewportInSection = "introduction";
    if(this.projectsRec.top <= 200) this.viewportInSection = "projects";
    if(this.contactMeRec.top <= 200) this.viewportInSection = "contact-me";
  }

  scrollToIntroduction(){
    this.viewportScroller.scrollToAnchor('introduction');
    this.viewportInSection = 'introduction';
  }
  scrollToProjects(){
    this.viewportScroller.scrollToAnchor('projects');
    this.viewportInSection = 'projects';
  }
  scrollToContactMe(){
    this.viewportScroller.scrollToAnchor('contact-me');
    this.viewportInSection = 'contact-me';
  }

  scrollTo(componentName:string){

    const components:{[key:string]: ()=> void} = {
      'introduction': () => {this.scrollToIntroduction()},
      'projects': () => {this.scrollToProjects()},
      'contact-me': () => {this.scrollToContactMe()}
    }

    components[componentName]();
  }
}
