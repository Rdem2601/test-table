import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableActionsComponent } from './table-actions/table-actions.component';

export interface SharedTableOptions {
  data?: Observable<any[]>;
  columns: TableColumn[];
  componentParent: any;
  // other options for primengtable...
}
export interface TableColumn {
  headerName?: string;
  field?: string;
  cellClass?: string;
  component?: any;
  // other options for column (format, filter...)...
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-table-app';
  public printedData: any;
  public tableOptions: SharedTableOptions = {
    componentParent: this,
    data: of([
      {
        firstName: 'Jean-Claude',
        lastName: 'Vandamme',
        city: 'Berchem-Sainte-Agathe',
      },
      {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        city: 'Funchal',
      },
      {
        firstName: 'Barack',
        lastName: 'Obama',
        city: 'Honolulu',
      },
    ]),
    columns: [
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
        headerName: 'Actions',
        component: TableActionsComponent,
      },
    ],
  };

  printData(data: any) {
    this.printedData = data;
  }
}
