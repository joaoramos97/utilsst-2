import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TesteComponent } from './components/teste/teste.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
