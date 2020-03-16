import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  message = '';

  constructor(
    private api: ApiService
  ) {
  }

  send() {
    this.api.sayHello(this.name).then((message: string) => {
      this.message = message;
    });
  }
}
