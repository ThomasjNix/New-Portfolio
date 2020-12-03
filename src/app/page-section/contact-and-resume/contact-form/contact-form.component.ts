import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactEmailData } from './contact-email';
import { ContactEmailService } from './contact-email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  emailForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    'lastName': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    'email': new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
    'comments': new FormControl('', [Validators.required, Validators.maxLength(200)])
  });
  emailFormData = new ContactEmailData({});
  submitClicked = false;
  constructor(private contactEmailService: ContactEmailService) { }

  ngOnInit(): void {
  }

  validateAndPostForm() {
    this.submitClicked = true;
    if (this.emailForm.valid) {
      this.emailFormData = new ContactEmailData(this.emailForm.value);
      this.contactEmailService.sendEmailRequest(this.emailFormData).subscribe((response) => {
        // TODO - handle response
        alert(response);
      });
    } else {
      this.emailForm.markAllAsTouched();
    }
  }

  formControlHasError(fieldName: string, error: string) {
    if (this.emailForm.get(fieldName)?.errors) {
      return Object.keys(this.emailForm.get(fieldName)?.errors as any).indexOf(error) > -1 && this.emailForm.get(fieldName)?.touched;
    }
    return false;
  }
}
