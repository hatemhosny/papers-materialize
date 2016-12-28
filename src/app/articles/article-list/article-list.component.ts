import { Component, OnInit } from '@angular/core';

import { ArticleService } from './../article.service';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  items;
  errorMessage: string;

  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this._articleService.getArticles()
      .subscribe(articles => this.items = articles,
                 error => this.errorMessage = <any>error);
  }

}
