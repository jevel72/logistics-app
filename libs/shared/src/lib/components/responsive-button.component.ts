import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'responsive-button',
  template: ` <button (click)="onClick()">{{ text }}</button> `,
  styles: [
    `
      button {
        transition: all 0.5s;
      }
      button:hover {
        transform: scale(1.2);
      }
    `,
  ],
})
export class ResponsiveButtonComponent {
  public onClick(): void {
    this.clicked.emit();
  }
  @Output() clicked = new EventEmitter();
  @Input() text: string = 'SAMPLE TEXT';
}
