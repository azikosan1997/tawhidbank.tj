import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {

  }

  getAllNews(): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/all-news`);
  }

  getNewsById(newsId: number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/all-news/${newsId}`);
  }
}
