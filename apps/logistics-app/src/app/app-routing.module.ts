import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  {
    path: 'list',
    component: LogisticsListComponent,
    data: { animation: 'ListPage' },
  },
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full',
    data: { animation: 'HomePage' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'NotFoundRoute' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
