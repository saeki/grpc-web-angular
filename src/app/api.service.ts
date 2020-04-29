import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloReply, HelloRequest } from '../proto/helloworld_pb';
import { GreeterClient } from '../proto/helloworld_pb_service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private client = new GreeterClient('http://localhost:8080');

  constructor() {
  }

  sayHello(name: string) {
    return new Observable<string>((observer) => {
      const request = new HelloRequest();
      request.setName(name);
      console.log(request);
      this.client.sayHello(request, (err, response: HelloReply) => {
        if (err) {
          observer.error(err);
        } else {
          console.log(response);
          observer.next(response.getMessage());
        }
        observer.complete();
      });
    });
  }
}
