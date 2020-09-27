import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExampleComponent } from './components/list-example/list-example.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ProjectedSearchInputComponent } from './components/projected-search-input/projected-search-input.component';
import { UserRowInfoComponent } from './components/user-row-info/user-row-info.component';
import { ProjectedUserRowInfoComponent } from './components/projected-user-row-info/projected-user-row-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListExampleComponent,
    SearchInputComponent,
    ProjectedSearchInputComponent,
    UserRowInfoComponent,
    ProjectedUserRowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
