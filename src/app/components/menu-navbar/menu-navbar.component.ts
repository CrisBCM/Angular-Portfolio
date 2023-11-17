import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent {
  @Output() emitScroll = new EventEmitter <string>;
  @Input() actualPage:string = "";
  
}
