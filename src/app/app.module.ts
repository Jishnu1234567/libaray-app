import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    SearchBookComponent,
    ViewbookComponent,
    DeleteAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
