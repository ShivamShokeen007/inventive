import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { WorklistComponent } from './worklist/worklist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'work',
    pathMatch: 'full',
  },
  {
    path: 'work',
    component: WorklistComponent,
  },
  {
    path: 'paginatiom',
    component: PaginationComponent,
  },
  {
    path: 'sidemenu',
    component: SidemenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
