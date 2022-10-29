import { Component, Input, OnInit } from '@angular/core';
import { SharedTableOptions, TableColumn } from 'src/app/app.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  @Input() sharedTableOptions: SharedTableOptions;

  constructor() {}

  ngOnInit(): void {}
}
