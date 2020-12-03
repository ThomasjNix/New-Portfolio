import { Observable, of } from 'rxjs';
import { ContactEmailData } from './contact-email';

export class ContactEmailService {
    sendEmailRequest(emailData: ContactEmailData): Observable<any> {
        //  TODO
        return of(emailData.comments);
    }
}