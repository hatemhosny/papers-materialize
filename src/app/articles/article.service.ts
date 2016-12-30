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

  private url: string = environment.papersApiUrl + environment.apiArticles;

  private filters: string = 'filter[meta_key]=journal&filter[meta_value]=circulation' ;
  private fields = {
                    'id': 'id',
                    'title': 'title.rendered',
                    'journal': 'acf.journal',
                    'types': 'acf.publication_types',
                    'duration': 'acf.audio_duration',
                    'date': 'acf.publication_date',
                    'year': 'acf.year',
                    'month': 'acf.month',
                    'abstract': 'acf.abstract'
                  };

  private parameters: string = '_query=[*].' + JSON.stringify(this.fields).replace(/"/g, '');
  private client: string = 'client=' + environment.client;

  private fullUrl: string = this.url + '?' + this.parameters + '&' + this.filters + '&' + this.client;


  constructor(private http: Http) { }

  getArticles(): Observable<IArticle[]> {
    return this.http.get(this.fullUrl)
      .map((response: Response) => <IArticle[]>response.json())
       .do(data => console.log(this.fullUrl))
      .catch(this.handleError);
  }

  getArticle(id: number): Observable<IArticle> {
    return this.getArticles()
      .map((articles: IArticle[]) => articles.find(article => article.id === id));
  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }


}
