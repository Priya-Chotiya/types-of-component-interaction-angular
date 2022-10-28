import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ComponentAComponent } from './components/component-a/component-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
