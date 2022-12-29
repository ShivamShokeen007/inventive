import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'sample';
  menuToggle: any;

  constructor(){}

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.menuToggle = localStorage.getItem('menu_toggle');
  }
}
