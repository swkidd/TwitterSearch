import { Injectable } from '@angular/core';
import { QueryResponse } from '../model/queryresponse.model';
import { Query } from "../model/query.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public search(query: Query) {
    let headers: any = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<QueryResponse>("http://192.168.11.231:8080/api/search", query, headers);
  }
}
