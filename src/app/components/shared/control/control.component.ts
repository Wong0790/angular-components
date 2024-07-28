import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor(private el: ElementRef) {}

  onClick(): void {
    console.log(this.el);
    console.log(this.control);
  }
}
