import { Injectable } from '@angular/core';
import { GreeterClient } from '../proto/helloworld_pb_service';
import { HelloReply, HelloRequest } from '../proto/helloworld_pb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private client = new GreeterClient('http://localhost:8080');

  constructor() {
  }

  sayHello(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new HelloRequest();
      request.setName(name);
      console.log(request);
      this.client.sayHello(request, (err, response: HelloReply) => {
        if (err) {
          return reject(err);
        }
        console.log(response);
        resolve(response.getMessage());
      });
    });
  }
}
