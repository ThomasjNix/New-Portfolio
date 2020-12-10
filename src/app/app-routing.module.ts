import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './page-section/about-me/about-me.component';
import { AdminComponent } from './page-section/admin/admin.component';
import { ContactAndResumeComponent } from './page-section/contact-and-resume/contact-and-resume.component';
import { ProfessionalExperienceComponent } from './page-section/professional-experience/professional-experience.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'contact-and-resume', component: ContactAndResumeComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
