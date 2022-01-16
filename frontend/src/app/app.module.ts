import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCvComponent } from './CvTech/add-cv/add-cv.component';
import { DeleteComponent } from './CvTech/delete/delete.component';
import { DetailsComponent } from './CvTech/details/details.component';
import { HiredComponent } from './CvTech/hired/hired.component';
import { ItemComponent } from './CvTech/item/item.component';
import { ListComponent } from './CvTech/list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './CvTech/cv/cv.component';
// import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { ReadComponent } from './read/read.component';
import { UpdateCvComponent } from './CvTech/update-cv/update-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    CvComponent,
    DeleteComponent,
    DetailsComponent,
    HiredComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    ErrorComponent,
    HeaderComponent,
    LoginComponent,
    // HttpComponent,
    ReadComponent,
    UpdateCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
