import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';


export interface Blog {
  content: string;
  createdAt: string;
  description: string;
  id: string;
  img: string;
  thumbnail: string;
  title: string;
};
export interface CreatedBlog {
  content: string;
  createdAt: string;
  description: string;
  img: string;
  thumbnail: string;
  title: string;
};


const httpOptions = {
  Headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  [x: string]: any;
  url = `https://628c5bd03df57e983ecd72ea.mockapi.io/api/v1/blog/`;
  constructor(private http: HttpClient) {

   }

  getListBlog(): Observable<any | Blog[]> {
   return this.http.get(this.url).pipe(first());
  }

  deleteBlogItem(id:string): Observable<any | Blog> {
    console.log('id', id)
    return this.http.delete(`${this.url + id}`).pipe(first());
  }

  postBlogItem(blog: CreatedBlog ):Observable<any | CreatedBlog> {
      return this.http.post(this.url, blog).pipe(first());
  }

  putBlogItem(blog: Blog):Observable<any | Blog>{
    return this.http.put(this.url, blog).pipe(first());
  }
}
