import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface UnsplashResponse{
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {

  }
  // new method to make a request
  // tslint:disable-next-line:typedef
  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID YIinny2UAk7vWAzrpqWvBQQP5N1eI5ih2WxjDULTtow'
      }
    });
  }
}
