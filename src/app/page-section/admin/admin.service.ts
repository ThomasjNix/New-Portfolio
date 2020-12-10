import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addNewExperience(experience: Experience): Observable<Experience> {
    return <Observable<Experience>>(this.http.post('api/admin/experience', experience));
  }
}
