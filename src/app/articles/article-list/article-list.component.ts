import { IArticle } from './../article.model';
import { Component, OnInit } from '@angular/core';

import { ArticleService } from './../article.service';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  items: [IArticle];

  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this.items = this._articleService.getArticles();
  }

}
