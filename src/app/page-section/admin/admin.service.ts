import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Experience } from '../models/experience.model';
import { LoginDetails } from './admin-login/login-details.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  experienceAddSubject = new Subject<Experience>();
  constructor(private http: HttpClient) { }

  addNewExperience(experience: Experience): Observable<Experience> {
    return <Observable<Experience>>(this.http.post('api/admin/experience', experience));
  }

  login(loginDetails: LoginDetails): Observable<any> {
    return this.http.post('api/admin/login', loginDetails)
    .pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('access_token', response.token);
        }
      })
    );
  }

  logout(): boolean {
    localStorage.removeItem('access_token');
    if (localStorage.getItem('access_token')) {
      return false;
    }
    return true;
  }

  alertExperienceAdded(experience: Experience): void {
    this.experienceAddSubject.next(experience);
  }

  getExperienceAddSubject(): Subject<Experience> {
    return this.experienceAddSubject;
  }
}
