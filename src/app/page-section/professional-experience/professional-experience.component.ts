import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../models/experience.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  experienceList: Experience[] = [];
  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
    this.experienceService.getAllExperience().subscribe((experienceList: Experience[]) => {
      this.experienceList = experienceList;
    });
  }

  navToSingleExperience(id: number) {
    this.router.navigate([`/professional-experience/${id}`]);
  }
}
