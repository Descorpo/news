import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsApiService } from './services/news-api.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
