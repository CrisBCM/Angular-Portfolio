import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent {
  @Input() urlsImgLanguages:string[] = [];
  @Input() urlOfPage:string = "";
  @Input() urlOfGithub:string = "";
}
