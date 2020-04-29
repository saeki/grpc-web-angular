import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  name = '';
  message = '';
  loading = false;

  constructor(
    private api: ApiService
  ) {
  }

  send() {
    this.loading = true;
    this.api.sayHello(this.name)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe((message: string) => {
        this.message = message;
      });
  }
}
