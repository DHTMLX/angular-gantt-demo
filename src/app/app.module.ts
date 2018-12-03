import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { GanttComponent } from './components/gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
