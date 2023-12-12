import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent{
  viewportInSection:string = "introduction";
  @ViewChild('introduction') introductionComp!:IntroductionComponent;
  @ViewChild('projects') projectsComp!:ProjectsComponent;
  introductionRec:any;
  projectsRec:any;

  constructor(private viewportScroller: ViewportScroller){
    this.scrollToIntroduction();
  }

  @HostListener('window:scroll', [])
  onScroll(){
    this.introductionRec = this.introductionComp.mainElement.nativeElement.getBoundingClientRect();
    this.projectsRec = this.projectsComp.projectsMain.nativeElement.getBoundingClientRect();

    // console.log(this.projectsRec.top + "TOP DE PROJECTS")
    if(this.introductionRec.top <= 0) this.viewportInSection = "introduction";
    if(this.projectsRec.top <= 50) this.viewportInSection = "projects";
  }

  scrollToIntroduction(){
    this.viewportScroller.scrollToAnchor('introduction');
    this.viewportInSection = 'introduction';
  }
  scrollToProjects(){
    this.viewportScroller.scrollToAnchor('projects');
    this.viewportInSection = 'projects';
  }

  scrollTo(componentName:string){

    const components:{[key:string]: ()=> void} = {
      'introduction': () => {this.scrollToIntroduction()},
      'projects': () => {this.scrollToProjects()}
    }

    components[componentName]();
  }
}
