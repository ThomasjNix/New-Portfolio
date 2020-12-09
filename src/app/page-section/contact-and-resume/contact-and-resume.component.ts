import { Component, OnInit } from '@angular/core';
import { ContactEmailData } from './contact-form/contact-email';

@Component({
  selector: 'app-contact-and-resume',
  templateUrl: './contact-and-resume.component.html',
  styleUrls: ['./contact-and-resume.component.scss']
})
export class ContactAndResumeComponent implements OnInit {

  showModal: boolean = false;
  contactEmailData: ContactEmailData = {} as any;
  constructor() { }

  ngOnInit(): void {
  }

  setAndShowContactResponse(event: any) {
    this.contactEmailData = event;
    this.showModal = true;
  }

  hideModal() {
    this.showModal = false;
  }
}
