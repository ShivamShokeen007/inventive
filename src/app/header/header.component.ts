import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  sideMenu:any;
  menuToggle :boolean = false;
  constructor(){}

  ngOnInit(): void {
    localStorage.setItem('menu_toggle','false');
  }

  ngDoCheck(){
    this.sideMenu = localStorage.getItem('menu-selected');
    localStorage.removeItem('menu-selected');
  }


  menuCollapse(){
    let c :any =  this.menuToggle == false ? true : false;
    this.menuToggle = this.menuToggle == false ? true : false;
    localStorage.setItem('menu_toggle',c);
  }

  
}
