import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../professional-experience/experience.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-experience',
  templateUrl: './manage-experience.component.html',
  styleUrls: ['./manage-experience.component.scss']
})
export class ManageExperienceComponent implements OnInit {

  experienceList: Experience[] = [];
  constructor(private experienceService: ExperienceService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.experienceService.getAllExperience().subscribe((experienceList: Experience[]) => {
      this.experienceList = experienceList;
    });
    this.adminService.getExperienceAddSubject().subscribe((experience: Experience) => {
      this.experienceList.push(experience);
    });
  }

  deleteRecord(experienceID: number) {
    this.experienceService.deleteExperience(experienceID).subscribe((deletedElement) => {
      const removeIndex = this.experienceList.findIndex(() => {
        return deletedElement._id = experienceID;
      });
      if (removeIndex > -1) {
        this.experienceList.splice(removeIndex, 1);
      }
    });
  }
}
