import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getAllExperience(): Observable<Experience[]> {
    return <Observable<Experience[]>>(this.http.get('/api/experience'));
  }

  getExperienceById(experienceID: number): Observable<Experience> {
    return <Observable<Experience>>(this.http.get(`/api/experience/${experienceID}`));
  }

  deleteExperience(experienceID: number): Observable<Experience> {
    return <Observable<Experience>>(this.http.delete(`/api/admin/experience/${experienceID}`));
  }
}
