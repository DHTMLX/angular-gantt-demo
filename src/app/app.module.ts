import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './services/in-memory-data.service'

import {AppComponent} from './app.component';
import {GanttComponent} from "./components/gantt.component";

@NgModule({
  declarations: [
     AppComponent,
     GanttComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}