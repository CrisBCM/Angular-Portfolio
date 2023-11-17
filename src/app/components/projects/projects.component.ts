import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit{
  @ViewChild('projects') projectsContainer!:ElementRef;
  @ViewChild('projectsMain') projectsMain!:ElementRef;
  rect:any;
  isVisible:boolean = false;
  
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
