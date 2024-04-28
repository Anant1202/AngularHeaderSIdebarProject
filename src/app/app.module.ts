import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewdashboardComponent } from './newdashboard/newdashboard.component';
import { NewheaderComponent } from './newdashboard/newheader/newheader.component';
import { NewmaindashboardComponent } from './newdashboard/newmaindashboard/newmaindashboard.component';
import { NewsideComponent } from './newdashboard/newside/newside.component';

@NgModule({
  declarations: [
    AppComponent,
    NewdashboardComponent,
    NewheaderComponent,
    NewmaindashboardComponent,
    NewsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
