import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {shareReplay} from 'rxjs';
import {UserControllerService} from "./generated/openapi";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (user$ | async; as user) {
    <h1>Welcome, {{ user.name10 }}</h1>
    }
  `,
})
export class AppComponent {
  private userService = inject(UserControllerService);

  user$ = this.userService.getCurrentUser().pipe(
    shareReplay({bufferSize: 1, refCount: true})
  );
  //123456789123456789
}
