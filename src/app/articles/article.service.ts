import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IArticle } from './article.model';
import { environment } from '../../environments/environment';


@Injectable()
export class ArticleService {

  private articles: IArticle[];

  private url: string = environment.papersApiUrl + environment.apiArticles;

  private itemsPerPage: number = environment.itemsPerPage;

  private totalItems: number;

  private filters: string = 'filter[meta_key]=has_audio&filter[meta_value]=1';

  private fields = {
                    'id': 'id',
                    'title': 'title.rendered',
                    'pmid': 'acf.pmid',
                    'date': 'acf.publication_date',
                    'year': 'acf.year',
                    'month': 'acf.month',
                    'authors': 'acf.authors',
                    'abstract': 'acf.abstract',
                    'journal': 'acf.journal',
                    'journalIssn': 'acf.journal_issn',
                    'publicationTypes': 'acf.publication_types',
                    'audioDuration': 'acf.audio_duration'
                  };

  // convert fields object to string and remove double quotes
  private formattedFields: string = '_query=[*].' + JSON.stringify(this.fields).replace(/"/g, '');

  private client: string = 'client=' + environment.client;

  private fullUrl: string = this.url + '?' + this.filters + '&' + this.formattedFields + '&' + this.client;


  constructor(private http: Http) { }

  private requestArticles(url: string) {
        return this.http.get(url)
        .do((response: Response) => {
            this.totalItems = Number(response.headers.get('X-WP-Total'));
        })
        .map((response: Response) => <IArticle[]>response.json())
        .do(data => this.articles = data)
        .catch(this.handleError);

  }
  getArticles(page?: number, filters?: {}): Observable<IArticle[]> {
    let pageQuery = '&per_page=' + this.itemsPerPage;
    if (page) {
      pageQuery += '&page=' + String(page);
    }

    // this.formatFilters(filters);

    return this.requestArticles(this.fullUrl + pageQuery);
  }

  getArticlesInJournal(journalIssn: string): Observable<IArticle[]> {
    if (journalIssn) {
      let journalFilter: string = 'filter[meta_key]=journal_issn&filter[meta_value]=' + journalIssn;
      return this.requestArticles(this.fullUrl + '&' + journalFilter);
    } else {
      this.getArticles();
    }
  }

  getArticle(id: number): Observable<IArticle> {
    return this.getArticles()
      .map((articles: IArticle[]) => articles.find(article => article.id === id));
  }

  getNumberOfArticlesPerPage(): number {
    return this.itemsPerPage;
  }

  getNumberOfTotalItems(): number {
    return this.totalItems;
  }

  // TODO implement (convert filter object to querystring)
  /*
  private formatFilters(filters: {}): string {
    return '';
  }
  */

  // TODO log errors
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }


}
