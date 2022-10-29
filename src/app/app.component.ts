import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableActionsComponent } from './table-actions/table-actions.component';

export interface SharedTableOptions {
  data?: Observable<any[]>;
  columns: TableColumn[];
  componentParent: any;
  getRowClass?: (data: any) => string;
  // other options for primengtable...
}
export interface TableColumn {
  headerName?: string;
  field?: string;
  cellClass?: string;
  component?: any;
  selectRowCol?: boolean;
  format?: (data: any) => string | null;
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

  public printedData: any;
  public tableOptions: SharedTableOptions = {
    componentParent: this,
    getRowClass: (data) => {
      if (data?.age > 50) return 'text-underline';
      return '';
    },
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
      },
    ],
  };

  printData(data: any) {
    this.printedData = data;
  }
}
