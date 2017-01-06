import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  p;

  @Input() id: string;
  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  private currentPage: number = 1;
  @Output() pageQueryChange: EventEmitter<any> = new EventEmitter();

  @Input()
  // get QueryString('page') to allow deep linking
  get pageQuery(): number {
    let page = this.currentPage;

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        if (!isNaN(param['page']) && Number(param['page']) > 0) {
          page = Number(param['page']);
        }
      }
    );
    this.pageQueryChange.emit(page);
    return page;
  }

  // update QueryString('page') to match currentPage
  set pageQuery(page: number) {

    if (isNaN(page) || page < 1) { page = 1; }

    this.currentPage = page;

    // get route without parameters
    let route = this.router.url.split('?')[0];  // TODO improve this

    if (page === 1) {
      this.router.navigate([route]);
    } else {
      this.router.navigate([route], {queryParams: {'page': page}});  // TODO allow other filters and sorting
    }

  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.currentPage = this.pageQuery;
  }

    ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

}
