import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/devices`);
  }

  getDeviceData(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/devices/${id}/data`);
  }
}
