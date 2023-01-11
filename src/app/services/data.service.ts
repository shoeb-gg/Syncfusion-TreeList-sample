import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  dataEndpoint =
    'https://syncfusion-tree-list-sample-backend-lmkmu1nrf-shoeb-gg.vercel.app/api/data';

  getSampleText() {
    return this.http.get(this.dataEndpoint);
  }
}
