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
/*
    this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
*/
    this.articleService.getArticles(page).subscribe(
      articles => {
        this.items = articles;
        this.totalItems = this.articleService.getNumberOfTotalItems();

        this.currentPage = page;
        // this.slimLoadingBarService.complete();
        this.errorMessage = null;
        this.pageQuery = page;
        window.scrollTo(0, 0);  // TODO smooth scroll
      },
      error => {
        // this.slimLoadingBarService.stop();
        this.errorMessage = <any>error;  // TODO log error
      }
    );
  }

}
