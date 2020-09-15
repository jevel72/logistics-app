import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path: 'list', component: LogisticsListComponent },
  { path: '', component: BasicComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
