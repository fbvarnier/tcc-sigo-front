import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  

  constructor( private httpClient: HttpClient) { }

  buscar():Observable<any> {
    console.log('chamou');
    let header = new HttpHeaders().append("Access-Control-Allow-Origin","*")
    .append('Access-Control-Allow-Credentials','true')
    .append('Access-Control-Allow-Methods','GET')
    .append('Access-Control-Max-Age','86400');    // cache for 1 day

    return this.httpClient.get("http://35.198.51.5/", {headers: header, responseType: 'text'});
  }
}
