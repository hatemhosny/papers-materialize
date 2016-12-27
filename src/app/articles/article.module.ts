import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
     { path: 'articles', component: ArticleListComponent },
     { path: 'articles/:id', component: ArticleDetailsComponent }
    ])
  ],
  declarations: [
    ArticleListComponent,
    ArticleItemComponent,
    ArticleDetailsComponent
  ],
  exports: [  ]
})
export class ArticleModule { }
