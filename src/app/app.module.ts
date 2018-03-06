import { UsersComponent } from './components/users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TesteComponent } from './components/teste/teste.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { RouterLink, RouterModule } from '@angular/router';
import {DataListModule} from 'primeng/datalist';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ProgressBarModule} from 'primeng/progressbar';
import {DataTableModule} from 'primeng/datatable';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TesteComponent,
    UsersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    ChartModule,
    RouterModule.forRoot([
    {  path: '', component: TesteComponent },
    {  path: 'all-users', component: UsersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
