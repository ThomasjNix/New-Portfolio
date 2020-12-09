import { Injectable } from '@angular/core';
import { ContactEmailData } from './contact-email';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http: HttpClient) { }

  sendEmailRequest(emailData: ContactEmailData): Observable<ContactEmailData> {
    return <Observable<ContactEmailData>>(this.http.post('api/contact/contact-form', emailData));
  }
}
