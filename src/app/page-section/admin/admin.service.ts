import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';
import { LoginDetails } from './admin-login/login-details.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addNewExperience(experience: Experience): Observable<Experience> {
    return <Observable<Experience>>(this.http.post('api/admin/experience', experience));
  }

  login(loginDetails: LoginDetails): Observable<boolean> {
    return of(false);
  }
}
