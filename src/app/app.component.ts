import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from './services/data.service';
import {
  PageSettingsModel,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public pageSettings: PageSettingsModel = {};
  public sortSettings: SortSettingsModel = {};

  public data: any[] = [];

  ngOnInit(): void {
    this.pageSettings = { pageSize: 10 };
    this.sortSettings = {
      columns: [{ field: 'name', direction: 'Ascending' }],
    };

    this.dataService.getSampleText().subscribe((res: any) => {
      this.data = res.data;
    });
  }
}
