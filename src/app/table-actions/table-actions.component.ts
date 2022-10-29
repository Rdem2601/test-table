import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {
  @Input() row: any;
  @Input() componentParent: AppComponent;

  constructor() {}

  ngOnInit(): void {}

  printData(): void {
    this.componentParent.printData(this.row);
  }
}
