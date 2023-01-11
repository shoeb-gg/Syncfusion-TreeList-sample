import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  dataEndpoint = 'http://localhost:4000/api/data';

  getSampleText() {
    return this.http.get(this.dataEndpoint);
  }
}
