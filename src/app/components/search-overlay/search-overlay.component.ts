import { Component } from '@angular/core';

@Component({
  selector: 'app-search-overlay',
  template: `
    <div class="overlay-container mat-elevation-z2">
    <mat-divider></mat-divider>
    <mat-action-list *ngFor="let search of recentSearches">
      <mat-list-item>
        <mat-icon matListItemIcon>history</mat-icon>
        <h3 matListItemTitle>{{ search }}</h3>
        <button matListItemMeta mat-icon-button>
          <mat-icon>close</mat-icon>
        </button>
      </mat-list-item>
    </mat-action-list>
    </div>
  `,
  styles: [
    `
      .overlay-container {
        border-radius: 0px 0px 32px 32px;
        min-width: 468px;
        background: white;
        padding-bottom: 16px;
      }
    `
  ]
})
export class SearchOverlayComponent {
  recentSearches = ['angular', 'rxjs', 'signals', 'component'];

  constructor() {}
}
