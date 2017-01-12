import { Injectable } from '@angular/core';


@Injectable()
export class LoadingService {

  constructor() { }

  start() {
    // NProgress.configure({ showSpinner: true, trickleSpeed: 100 });
    NProgress.start();
  }

  done() {
    NProgress.done();
  }

}
