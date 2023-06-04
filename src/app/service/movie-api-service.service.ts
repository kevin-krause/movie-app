import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '64a8512870ec4d155b954cd3f82647a5';

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  trendingMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/day?api_key=${this.apikey}`
    );
  }
}
