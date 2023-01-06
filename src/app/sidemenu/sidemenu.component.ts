import { Component, DoCheck } from '@angular/core';
import type { OnInit } from '@angular/core';
import * as sidemenu_mock from '../mock/left-sidemenu.json';
import * as multi_side_menu_mock from '../mock/multi-level-left-menu.json';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit, DoCheck {
  navitem?: any = (sidemenu_mock as any).default;
  navitemMulti?: any = (multi_side_menu_mock as any).default;
  // navitem = [
  //   {
  //     name: 'Dashboard',
  //     icon: '../../../../assets/images/dashboard-icon.svg',
  //     iconTrans: '../../../../assets/images/dashboard-trans.png',
  //   },
  //   {
  //     name: 'Worklist',
  //     icon: '../../../../assets/images/worklist-icon.svg',
  //     iconTrans: '../../../../assets/images/dashboard-trans.png',
  //   },
  //   {
  //     name: 'Case History',
  //     icon: '../../../../assets/images/case.svg',
  //     iconTrans: '../../../../assets/images/dashboard-trans.png',
  //   },
  //   {
  //     name: 'Reports',
  //     icon: '../../../../assets/images/report.svg',
  //     iconTrans: '../../../../assets/images/dashboard-trans.png',
  //   },
  //   {
  //     name: 'Agent Management',
  //     icon: '../../../../assets/images/agent.svg',
  //     iconTrans: '../../../../assets/images/dashboard-trans.png',
  //   },
  // ];
  navSelected = 1;
  menuToggle: boolean = false;

  collapseMenu: any = [];
  collapseMenu2: any = [];
  collapseMenu3: any = [];

  expanded :any;
  selectedItems :any;
  navSelectedID : any;
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('menu-selected', 'Dashboard');
    this.navitem = this.navitem.sort((p1: any, p2: any) =>
      p2.sequence < p1.sequence ? 1 : p2.sequence > p1.sequence ? -1 : 0
    );

    this.navitemMulti = this.navitemMulti.sort((p1: any, p2: any) =>
      p2.sequence < p1.sequence ? 1 : p2.sequence > p1.sequence ? -1 : 0
    );

    console.log('this.navitemMulti', this.navitemMulti);
  }

  clearCollapse(){
    this.collapseMenu = [];
  }

  menuCollapse(i: number) {
    this.collapseMenu = [];
    this.collapseMenu2 = [];
    this.collapseMenu3 = [];
    if (this.collapseMenu[i]) {
      this.collapseMenu[i] = false;
    } else {
      this.collapseMenu[i] = true;
    }



    // console.log("this.collapseMenu",this.collapseMenu);
    // console.log("this.collapseMenu 2",this.collapseMenu2);
    // console.log("this.collapseMenu 3",this.collapseMenu3);
    // this.collapseMenu2 = false;
    // this.collapseMenu3 = false;
  }

  selectItem(item:any, id:any) {
    this.selectedItems[id] = item;
    console.log('rin')
      }

  isSelectedItem(item:any, id:any) {
    console.log("this.selectedItems",this.selectedItems);
    if(this.selectedItems?.[id]){
      console.log('true');
        return false
    }
    else{
      console.log('true 1',this.selectedItems?.[id] && this.selectedItems?.[id] === item);


      return this.selectedItems?.[id] && this.selectedItems?.[id] === item;


    }
    
  };

  onItemSelected(item: any) {
    if (item.child_menu_items && item.child_menu_items.length) {
      this.expanded[item.id] = !this.expanded[item.id];
    }
}

  menuCollapse2(i: number) {
    if (this.collapseMenu2[i]) {
      this.collapseMenu2[i] = false;
    } else {
      this.collapseMenu2[i] = true;
    }
  }

  menuCollapse3(i: number) {
    if (this.collapseMenu3[i]) {
      this.collapseMenu3[i] = false;
    } else {
      this.collapseMenu3[i] = true;
    }
  }

  navSelect(i: number, item: any) {
    // this.navSelected = item.id;
    this.navSelected = i;
    localStorage.setItem('menu-selected', item);
  }

  recurr(i:any){
    console.log('recurr',i);
  }

  getj(i:any){
    console.log("j",i);
  }

  ngDoCheck() {
    let checkToggle = localStorage.getItem('menu_toggle');
    if (checkToggle == 'true') {
      this.menuToggle = true;
    } else {
      this.menuToggle = false;
    }
  }
}
