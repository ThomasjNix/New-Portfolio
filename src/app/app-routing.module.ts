import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './page-section/about-me/about-me.component';
import { ContactAndResumeComponent } from './page-section/contact-and-resume/contact-and-resume.component';
import { HobbiesComponent } from './page-section/hobbies/hobbies.component';
import { ProfessionalExperienceComponent } from './page-section/professional-experience/professional-experience.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact-and-resume', component: ContactAndResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
