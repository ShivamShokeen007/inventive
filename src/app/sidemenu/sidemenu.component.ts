import { Component, DoCheck } from '@angular/core';
import type { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, DoCheck {
  navitem = [
    {
      name: 'Dashboard',
      icon: '../../../../assets/images/dashboard-icon.svg',
      iconTrans: '../../../../assets/images/dashboard-trans.png',
    },
    {
      name: 'Worklist',
      icon: '../../../../assets/images/worklist-icon.svg',
      iconTrans: '../../../../assets/images/dashboard-trans.png',
    },
    {
      name: 'Case History',
      icon: '../../../../assets/images/case.svg',
      iconTrans: '../../../../assets/images/dashboard-trans.png',
    },
    {
      name: 'Reports',
      icon: '../../../../assets/images/report.svg',
      iconTrans: '../../../../assets/images/dashboard-trans.png',
    },
    {
      name: 'Agent Management',
      icon: '../../../../assets/images/agent.svg',
      iconTrans: '../../../../assets/images/dashboard-trans.png',
    },
  ];
  navSelected = 1;
  menuToggle : boolean = false;

  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('menu-selected','Dashboard');
  }

  navSelect(i:number,name:string){
    this.navSelected = i;
    localStorage.setItem('menu-selected',name);
  }

  ngDoCheck(){
    let checkToggle = localStorage.getItem('menu_toggle');
    if(checkToggle == 'true'){
      this.menuToggle = true;
    }
    else{
      this.menuToggle = false;
    }
  }
}
