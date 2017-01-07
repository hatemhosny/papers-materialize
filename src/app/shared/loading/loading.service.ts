import { Injectable } from '@angular/core';

declare var NProgress: any;

@Injectable()
export class LoadingService {

  constructor() { }

  start() {
    // NProgress.configure({ showSpinner: false });
    NProgress.start();
  }

  done() {
    NProgress.done();
  }

}
