import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SendingInfoService {

  subject = new Subject<any>();

  sendInfo(info) {    
    this.subject.next(info);
  } 

  getInfo() {
    return this.subject.asObservable();
  }
}
 