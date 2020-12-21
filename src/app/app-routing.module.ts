import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AboutMeComponent } from './page-section/about-me/about-me.component';
import { AdminLoginComponent } from './page-section/admin/admin-login/admin-login.component';
import { AdminComponent } from './page-section/admin/admin.component';
import { ContactAndResumeComponent } from './page-section/contact-and-resume/contact-and-resume.component';
import { ProfessionalExperienceComponent } from './page-section/professional-experience/professional-experience.component';
import { SingleExperienceComponent } from './page-section/professional-experience/single-experience/single-experience.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'professional-experience/:id', component: SingleExperienceComponent },
  { path: 'contact-and-resume', component: ContactAndResumeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
