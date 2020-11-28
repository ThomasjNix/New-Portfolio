import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { AboutMeComponent } from './page-section/about-me/about-me.component';
import { ProfessionalExperienceComponent } from './page-section/professional-experience/professional-experience.component';
import { HobbiesComponent } from './page-section/hobbies/hobbies.component';
import { ContactAndResumeComponent } from './page-section/contact-and-resume/contact-and-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    AboutMeComponent,
    ProfessionalExperienceComponent,
    HobbiesComponent,
    ContactAndResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
