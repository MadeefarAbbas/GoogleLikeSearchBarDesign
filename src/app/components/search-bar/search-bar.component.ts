import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div
     class="search-bar-container"
     cdkOverlayOrigin
     #overlayPosition="cdkOverlayOrigin"
     [ngClass]="{ 'opened mat-elevation-z2': getOverlay() }"
     >
      <button mat-icon-button>
        <mat-icon>search</mat-icon>
      </button>
      <input placeholder="Search my app" (focus)="overlayOpen(true)" (focusout)="overlayOpen(false)" />
    </div>

    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="overlayPosition"
      [cdkConnectedOverlayOpen]="getOverlay()"
    >
      <app-search-overlay></app-search-overlay>
    </ng-template>

  `,
  styles: [`

    :host {
      display: block;
    }


    .search-bar-container {
      padding: 0px 56px 0px 8px;
      background: #eaf1fb;
      border-radius: 32px;
      display: flex;
      align-items: center;

      > input {
        font-size: 1.1rem;
        outline: none;
        border: none;
        background: inherit;
        min-width: 352px;
      }

      &.opened {
        background: white;
        border-radius: 32px 32px 0px 0px;
      }
    }

  `]
})
export class SearchBarComponent {
  isOverlayOpen = false;

  overlayOpen(isOverlayOpen: boolean) {
    this.isOverlayOpen = isOverlayOpen;
  }

  getOverlay() {
    return this.isOverlayOpen;
  }
}
