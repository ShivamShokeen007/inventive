import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}

  // Base URL - https://learnify-api.demoserver.in/api/
  // EndPoint/Service Path - register
  // Header - with token and additional data

  postReq(
    base_url: any,
    endpoint_url: any,
    payload: any,
    token: any,
    pass_header?: any
  ): Observable<any> {
    let headers_custom: HttpHeaders = new HttpHeaders();
    headers_custom = headers_custom.append('Content-Type', 'application/json');
    headers_custom = headers_custom.append('Access-Control-Allow-Origin', '*');
    headers_custom = headers_custom.append(
      'Authorization',
      `Bearer ${token ? token : 'testbear'}`
    );

    // cookiie acc dns

    if (pass_header && pass_header.length > 0) {
      pass_header.forEach((el: any) => {
        headers_custom = headers_custom.append(el.key, el.value);
      });
    }

    return this.http.post(base_url + endpoint_url, payload, {
      headers: headers_custom,
    });
  }

  putReq(url: any, data: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.put(url, data, options);
  }

  getReq(url: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.get(url, options);
  }

  deleteReq(url: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.delete(url, options);
  }
}
