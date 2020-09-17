import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicComponent } from './basic/basic.component';
import { ClaimEditorComponent } from './claim-editor/claim-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LogisticsListComponent,
    NotFoundComponent,
    BasicComponent,
    ClaimEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // material
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    // my modules
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
