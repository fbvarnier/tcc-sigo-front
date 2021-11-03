import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  

  webapiurl = environment.webapiurl;

  constructor( private httpClient: HttpClient) { }

  buscar():Observable<any> {
    console.log('chamou');
    let header = new HttpHeaders().append("Access-Control-Allow-Origin","*")
    .append('Access-Control-Allow-Credentials','true')
    .append('Access-Control-Allow-Methods','GET')
    .append('Access-Control-Max-Age','86400');    // cache for 1 day

    return this.httpClient.get(this.webapiurl, {headers: header, responseType: 'text'});
  }
}
