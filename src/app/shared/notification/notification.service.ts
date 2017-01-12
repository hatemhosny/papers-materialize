import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  message(message: string) {
    Materialize.toast(message, 4000);
  }

  success(message: string) {
    Materialize.toast(message, 4000, 'success');
  }

  info(message: string) {
    Materialize.toast(message, 4000, 'info');
  }

  warning(message: string) {
    Materialize.toast(message, 4000, 'warning');
  }

  error(message: string) {
    Materialize.toast(message, 4000, 'error');
  }

}
