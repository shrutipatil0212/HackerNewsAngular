import { Injectable } from '@angular/core';
import { newStoriesUrl } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TopStoriesService {
  constructor(private http: HttpClient) {}

  getTopStories() {
    return this.http.get(newStoriesUrl);
  }
}
