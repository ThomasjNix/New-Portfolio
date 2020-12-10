import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experience } from '../../models/experience.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  experienceForm = new FormGroup({
    'title': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    'imageName': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });
  experienceFormData = new Experience({});
  submitClicked = false;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  validateAndPostForm() {
    this.submitClicked = true;
    if (this.experienceForm.valid) {
      this.experienceFormData = new Experience(this.experienceForm.value);
      this.adminService.addNewExperience(this.experienceFormData).subscribe((response: Experience) => {
        console.log(response);
      });
    } else {
      this.experienceForm.markAllAsTouched();
    }
  }

  formControlHasError(fieldName: string, error: string) {
    if (this.experienceForm.get(fieldName)?.errors) {
      return Object.keys(this.experienceForm.get(fieldName)?.errors as any).indexOf(error) > -1 && this.experienceForm.get(fieldName)?.touched;
    }
    return false;
  }

}
