import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}posts`;
  }

  getPosts(pageNumber: number = 1, pageSize: number = 10) {
    const limit = pageSize; const offset = (pageNumber - 1) * pageSize;
    let params = new HttpParams().set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<Post[]>(this.baseUrl, { params })
  }
}
