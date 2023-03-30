import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import { DataService } from '../../services/data.service';
import {
  PageSettingsModel,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tree-grid',
  standalone: true,
  imports: [CommonModule, TreeGridModule],
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TreeGridComponent implements OnInit {
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
