import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    DataTableModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
