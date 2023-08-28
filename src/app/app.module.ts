import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    RegisterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
