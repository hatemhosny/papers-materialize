import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
 }

  ngAfterViewInit() {
    $('ul.tabs').tabs();
  }

}
