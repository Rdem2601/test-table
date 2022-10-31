import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Table } from 'primeng/table';
import { SharedTableOptions, TableColumn } from 'src/app/app.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit, AfterViewInit {
  @Input() sharedTableOptions: SharedTableOptions;
  @ViewChild('table') table: Table;
  @Output() onTableReady: EventEmitter<Table> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.onTableReady.emit(this.table);
  }
}
