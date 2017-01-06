import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NgProgressModule } from 'ng2-progressbar';

import { TruncatePipe } from './truncate/truncate.pipe';
import { StringifyPipe } from './stringify/stringify.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2PaginationModule,
    NgProgressModule
  ],
  declarations: [
    TruncatePipe,
    StringifyPipe,
    PaginationComponent,
    LoadingComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    TruncatePipe,
    StringifyPipe,
    PaginationComponent,
    Ng2PaginationModule,
    LoadingComponent,
    NgProgressModule
  ]
})
export class SharedModule { }
