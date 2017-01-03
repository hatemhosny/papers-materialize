import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArticleService } from './../article.service';
import { IArticle } from '../article.model';

@Component({
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  items: IArticle[];
  errorMessage: string;
  currentPage: number = 1;
  itemsPerPage: number;
  totalItems: number;
  loading: boolean = false;
  subscription: Subscription;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.itemsPerPage = this.articleService.getNumberOfArticlesPerPage();
    this.loadArticles(this.getPageQuery());
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  loadArticles(page: number) {

    this.loading = true;

    this.articleService.getArticles(page)
                .subscribe(
                  articles => {
                    this.items = articles;
                    this.totalItems = this.articleService.getNumberOfTotalItems();

                    this.currentPage = page;
                    this.loading = false;
                    this.errorMessage = null;
                    this.updatePageQuery(page);
                    window.scrollTo(0, 0);  // TODO smooth scroll
                  },
                  error => {
                    this.loading = false;
                    this.errorMessage = <any>error;  // TODO log error
                  });
  }

  // get QueryString('page') to allow deep linking
  private getPageQuery(): number {
    let page = this.currentPage;
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        if (!isNaN(param['page']) && Number(param['page']) > 0) {
          page = Number(param['page']);
        }
      });
    return page;
  }

  // update QueryString('page') to match currentPage
  private updatePageQuery(page: number) {
    // get route without parameters
    let route = this.router.url.split('?')[0];  // TODO improve this

    if (page === 1) {
      this.router.navigate([route]);
    } else {
      this.router.navigate([route], {queryParams: {'page': page}});  // TODO allow other filters and sorting
    }
  }

}
