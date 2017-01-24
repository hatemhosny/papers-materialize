import { Injectable, ErrorHandler } from '@angular/core';

import { LoadingService } from './../../shared/loading/loading.service';
import { NotificationService } from '../../shared/notification/notification.service';
import  { environment } from '../../../environments/environment';

declare let Raven: any;

type LogLevel = 'error' | 'warning' | 'info';

@Injectable()
export class LogService implements ErrorHandler {

  private defaultErrorMessage = 'An error has occured! An error report has been sent.';

  constructor(private loadingService: LoadingService, private notification: NotificationService) { }

  // unhandeled exceptions before angular loads should be caught by Raven.config().install() in index.html

  // this is used for unhandeled exceptions caught by angular
  handleError(error: any): void {
    try {
      this.log(error, true, true, 'error', this.defaultErrorMessage);
    } catch (err) {
      console.log(error);
      console.log(err);
    }
  }

  // use this to handle exceptions
  logError(error: any, message = this.defaultErrorMessage): void {
    this.log(error, true, true, 'error', message);
  }

  // use this to log +/- notify warnings
  logWarning(message: string, notify = false): void {
    this.log(null, false, notify, 'warning', message);
  }

  // use this to log +/- notify message
  logMessage(message: string, notify = false): void {
    this.log(null, false, notify, 'info', message);
  }

  private log(error: any, stopLoading = false, notify = false, notificationType: LogLevel = 'info', message = ''): void {


    if (stopLoading) {
      this.loadingService.done();
    }

    if (notify && message) {
      switch (notificationType) {
        case 'error':
          this.notification.error(message);
          break;
        case 'warning':
          this.notification.warning(message);
          break;
        default:  // 'info'
          this.notification.info(message);
      }
    }

    let options = {
      level: notificationType,
      tags: {
        client: environment.client
      }
    };

    if (environment.envName === 'development') {
      console.log(message);
      if (error) {
        console.log(error.stack);
      }
    } else {
      if (error) {
        Raven.captureException(error.originalError, options);
      } else {
        Raven.captureMessage(message, options);
      }
    }
  }

}
