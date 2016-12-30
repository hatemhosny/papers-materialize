import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit, AfterViewInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
