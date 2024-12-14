import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private baseUrl="https://sheetdb.io/api/v1/n61f44k2vg2j2";
  constructor(private http:HttpClient) { 

  }
  
  getAll():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`)
  }

  addDetails(record:List):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`,{data:record})
  }

  deleteCard(name:string):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/taskname/${name}`)
  }

  updateDetails(name:string,record:List):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/taskname/${name}`,{data:record})
  }
}
