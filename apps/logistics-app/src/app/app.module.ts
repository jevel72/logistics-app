import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicComponent } from './basic/basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogisticsListComponent,
    NotFoundComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
