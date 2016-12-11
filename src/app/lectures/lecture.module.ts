import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { LectureListComponent } from './lecture-list/lecture-list.component';
import { LectureItemComponent } from './lecture-item/lecture-item.component';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
     { path: 'lectures', component: LectureListComponent },
     { path: 'lecture/:id', component: LectureDetailsComponent },
     { path: 'about', component: LectureListComponent }
    ])
  ],
  declarations: [
    LectureListComponent,
    LectureItemComponent,
    LectureDetailsComponent
  ],
  exports: [  ]
})
export class LectureModule { }
