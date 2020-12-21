import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.scss']
})
export class SingleExperienceComponent implements OnInit {
  experience: Experience = {} as any;
  experienceLoaded = false;
  constructor(private route: ActivatedRoute, private router: Router, private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const experienceID = params.id;
      if (!experienceID) {
        this.navOnLoadFail();
      } else {
        this.experienceService.getExperienceById(experienceID).subscribe((experience: Experience) => {
          this.experience = experience;
          this.experienceLoaded = true;
        }, () => {
          this.navOnLoadFail();
        });
      }
    });
  }

  navOnLoadFail() {
    this.router.navigate(['/professional-experience']);
  }

}
