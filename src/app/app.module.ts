import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedTableComponent } from './shared/shared-table/shared-table.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TableModule } from 'primeng/table';
import { DynamicModule } from 'ng-dynamic-component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SharedTableComponent, TableActionsComponent],
  imports: [BrowserModule, TableModule, DynamicModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
