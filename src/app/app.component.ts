import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Observable, of } from 'rxjs';
import { TableActionsComponent } from './table-actions/table-actions.component';

export interface SharedTableOptions {
  data?: Observable<any[]>;
  columns: TableColumn[];
  getRowClass?: (data: any) => string;
  globalFilterFields: string[];
  // other options for primengtable...
}
export interface TableColumn {
  headerName?: string;
  field?: string;
  cellClass?: string;
  component?: any;
  selectRowCol?: boolean;
  format?: (data: any) => string | null;
  actions?: {
    text?: string;
    class?: string;
    action?: (param?: any) => {} | void;
  }[];
  // other options for column (format, filter...)...
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-table-app';

  constructor(private cp: CurrencyPipe) {}
  public table: Table;
  public printedData: any;
  public selectedRows: any[];
  public tableOptions: SharedTableOptions = {
    getRowClass: (data) => {
      if (data?.age > 50) return 'text-underline';
      return '';
    },
    globalFilterFields: ['firstName', 'lastName', 'city'],
    data: of([
      {
        firstName: 'Jean-Claude',
        lastName: 'Vandamme',
        city: 'Berchem-Sainte-Agathe',
        age: 50,
        price: 1000,
      },
      {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        city: 'Funchal',
        age: 37,
        price: 2000,
      },
      {
        firstName: 'Barack',
        lastName: 'Obama',
        city: 'Honolulu',
        age: 60,
        price: 3000,
      },
    ]),
    columns: [
      {
        headerName: 'Checkbox',
        selectRowCol: true,
      },
      {
        headerName: 'Prénom',
        field: 'firstName',
        cellClass: 'red',
      },
      {
        headerName: 'Nom',
        field: 'lastName',
        cellClass: 'blue',
      },
      {
        headerName: 'Ville',
        field: 'city',
      },
      {
        headerName: 'Age',
        field: 'age',
      },
      {
        headerName: 'Prix',
        field: 'price',
        format: (price: number) => this.cp.transform(price),
      },
      {
        headerName: 'Actions',
        component: TableActionsComponent,
        actions: [
          {
            text: 'print1',
            action: this.print1,
          },
          {
            text: 'print2',
            action: this.print2,
          },
          {
            text: 'print3',
            action: this.print3,
          },
        ],
      },
    ],
  };

  print1() {
    console.log(1);
  }
  print2() {
    console.log(2);
  }
  print3() {
    console.log(3);
  }

  printData(data: any) {
    this.printedData = data;
  }

  search(target: any): void {
    this.table.filterGlobal(target.value, 'contains');
  }

  printSelected(): void {
    this.selectedRows = this.table.selection;
  }

  changeColumnPosition(): void {
    const col = this.tableOptions.columns.splice(1, 1)[0];
    this.tableOptions.columns.splice(2, 0, col);
    this.tableOptions = { ...this.tableOptions };
  }

  setMinAge(target: any): void {
    this.table.filter([target.value, 38], 'age', 'between');
  }

  setMaxAge(target: any): void {
    console.log(Number(target.value) ?? null);
    if (target.value)
      this.table.filter(target.value === '' ? null : target.value, 'age', 'lt');
    console.log(this.table.filters);
  }
}
