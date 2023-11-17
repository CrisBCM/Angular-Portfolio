import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent{

  constructor(private viewportScroller: ViewportScroller){}


  scrollTo(componentName:string){

    const components:{[key:string]: ()=> void} = {
      'introduction': () => {this.viewportScroller.scrollToAnchor('introduction')},
      'projects': () => {this.viewportScroller.scrollToAnchor('projects')}
    }

    components[componentName]();
  }
}
