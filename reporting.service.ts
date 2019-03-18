import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {fromEvent} from 'rxjs';
import {map,filter,debounceTime,distinctUntilChanged, switchMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  constructor(private http: HttpClient) { }

  getReportingData(){
    return this.http.get("http://localhost:/api/Soccer/getReportData").pipe(map(result => result));
  }
}
