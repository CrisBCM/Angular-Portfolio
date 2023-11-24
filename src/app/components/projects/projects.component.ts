import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectDetail } from 'src/app/interfaces/project-detail';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit{
  @ViewChild('projects') projectsContainer!:ElementRef;
  @ViewChild('projectsMain') projectsMain!:ElementRef;
  
  projectsArray: Project[] = [
    {
      name : "Foro B.P.3000",
      description : "Interactive forum to share your recipes",
      imgUrl: "../../../assets/images/projects/foroBP.jpg",
      detail : {
        urlsImgLanguages : ["../../../assets/images/lenguages-carousel/angular-icon.svg", "../../../assets/images/lenguages-carousel/springboot-icon.svg"],
        urlOfPage : "https://crisbcm.github.io/Frontend-B.P.3000/",
        urlOfGithub: "https://github.com/CrisBCM/Frontend-B.P.3000"
      }
    },
    // {
    //   name : "AAAAA",
    //   description : "BBBB",
    //   imgUrl: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    //   detail : {
    //     urlsImgLanguages : ["../../../assets/images/lenguages-carousel/css-icon.svg", "../../../assets/images/lenguages-carousel/html-icon.svg"],
    //     urlOfPage : "",
    //     urlOfGithub : "https://github.com/CrisBCM/Frontend-B.P.3000"
    //   }
    // }
  ];

  rect:any;
  isVisible:boolean = false;

  constructor(){
    console.log(this.projectsArray);
  }
  
  ngAfterViewInit(): void {
    this.rect = this.projectsContainer.nativeElement.getBoundingClientRect();
  }
  @HostListener('window:scroll', [])
  onScroll(){
    this.rect = this.projectsContainer.nativeElement.getBoundingClientRect();
    console.log(this.rect, "window.innerHeight: " + window.innerHeight);
    this.isVisible = this.rect.top < window.innerHeight && this.rect.bottom >= 0;
  }
}
