import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  experienceList: Experience[] = [];
  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getAllExperience().subscribe((experienceList: Experience[]) => {
      this.experienceList = experienceList;
    });
  }
}
