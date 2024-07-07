import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <app-search-bar></app-search-bar>
  </mat-toolbar>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-searchbar';
}
