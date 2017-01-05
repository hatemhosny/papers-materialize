import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ArticleService } from './../article.service';
import { IArticle } from '../article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  private items: IArticle[];
  private errorMessage: string;
  private loading: boolean = false;

  private currentPage: number = 1;
  private itemsPerPage: number;
  private totalItems: number;
  private pageQuery: number;

  constructor(
    private articleService: ArticleService
    ) { }

  ngOnInit(): void {
    this.itemsPerPage = this.articleService.getNumberOfArticlesPerPage();
  }

  ngAfterViewInit(): void {
    this.loadArticles(this.pageQuery);
  }

  loadArticles(page: number) {

    this.loading = true;

    this.articleService.getArticles(page).subscribe(
      articles => {
        this.items = articles;
        this.totalItems = this.articleService.getNumberOfTotalItems();

        this.currentPage = page;
        this.loading = false;
        this.errorMessage = null;
        this.pageQuery = page;
        window.scrollTo(0, 0);  // TODO smooth scroll
      },
      error => {
        this.loading = false;
        this.errorMessage = <any>error;  // TODO log error
      }
    );
  }

}
