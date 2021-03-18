import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-category-list',
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
        span {
          display: inline-block;
          margin-right: 4px;
          margin-bottom: 4px;
        }
        .label {
          background-color: #f7e6ff;
          color: #2d00ff;
          border-radius: 4px;
          padding: 2px 6px;
          font-style: italic;
          width: max-content;

        }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}
