import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AboutMeComponent } from './page-section/about-me/about-me.component';
import { ProfessionalExperienceComponent } from './page-section/professional-experience/professional-experience.component';
import { ContactAndResumeComponent } from './page-section/contact-and-resume/contact-and-resume.component';
import { ContactFormComponent } from './page-section/contact-and-resume/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    AboutMeComponent,
    ProfessionalExperienceComponent,
    ContactAndResumeComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
