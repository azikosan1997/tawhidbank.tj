import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor(private http: HttpClient) {

  }

  getAllAnnouncements(): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/announcements`);
  }

  getAnnouncementById(newsId: number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/announcements/${newsId}`);
  }
}
