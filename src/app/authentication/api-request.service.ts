import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  postReq(url:any, data:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
    };
    return this.http.post(url , data, options);
  }

  putReq(url:any, data:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
    };
    return this.http.put(url , data, options);
  }

  getReq(url:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'}),
    };
    return this.http.get(url, options);
  }

  deleteReq(url:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
    };
    return this.http.delete(url, options);
  }

}
