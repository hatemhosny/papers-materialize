import { ArticleModule } from './../article.module';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { LoadingService } from './../../shared/loading/loading.service';
import { NotificationService } from '../../shared/notification/notification.service';
import { ArticleService } from './../article.service';
import { IArticle } from '../article.model';


@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  items: IArticle[];
  errorMessage: string;

  currentPage: number = 1;
  itemsPerPage: number;
  totalItems: number;
  pageQuery: number;

  constructor(
    private articleService: ArticleService,
    private loadingService: LoadingService,
    private notification: NotificationService,
    ) { }


  ngOnInit(): void {
    this.itemsPerPage = this.articleService.getNumberOfArticlesPerPage();
  }

  ngAfterViewInit(): void {
    this.loadArticles(this.pageQuery);
  }

  loadArticles(page: number) {

    this.loadingService.start();

    this.articleService.getArticles(page).subscribe(
      articles => {
        this.items = articles;
        this.totalItems = this.articleService.getNumberOfTotalItems();

        this.currentPage = page;
        this.loadingService.done();

        this.errorMessage = null;
        this.pageQuery = page;
        window.scrollTo(0, 0);  // TODO smooth scroll
      },
      error => {
        this.loadingService.done();
        this.notification.error('An error occurred during loading!');
        // this.errorMessage = <any>error;  // TODO log error
      }
    );
  }

}
