
// Importing the required modules
import { Injectable } from '@angular/core';
// HTTP imports 
import { HttpClient } from '@angular/common/http';
// Importing the Observable class
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class VisitorSearchService {

    ROUTE = 'http://localhost:5000/';


    constructor(private http: HttpClient) { }

    // HTTP request to get the visitors and exhibitions
    getVisitorsByDate(startDate: string, endDate: string, periodicity: string): Observable<any> {
        // HTTP request, catches the response and returns it, also catches the error and returns it. Parameters on URL
        return this.http.get(`${this.ROUTE}visitors-by-date?start_date=${startDate}&end_date=${endDate}&period=${periodicity}`);
    }

    // HTTP request to get the visitors and exhibitions
    getVisitorsAndExhibitions(startDate: string, endDate: string, periodicity: string): Observable<any> {
        // HTTP request, catches the response and returns it, also catches the error and returns it. Parameters on URL
        return this.http.get(`${this.ROUTE}visitors-and-exhibitions?start_date=${startDate}&end_date=${endDate}&period=${periodicity}`);
    }

    getVisitorsByAttendances(): Observable<any> {
        // HTTP request, catches the response and returns it, also catches the error and returns it
        return this.http.get(`${this.ROUTE}visitors-ordered-by-attendances`);
    }

    getVisitorsChangeRate(startDate: string, endDate: string, periodicity: string): Observable<any> {
        // HTTP request, catches the response and returns it, also catches the error and returns it. Parameters on URL
        return this.http.get(`${this.ROUTE}visitors-growth-rate?start_date=${startDate}&end_date=${endDate}&period=${periodicity}`);
    }

}