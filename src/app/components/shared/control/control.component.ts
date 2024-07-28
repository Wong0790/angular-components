import {
  Component,
  ElementRef,
  Input,
  ViewChild,
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  constructor(private el: ElementRef) {}

  onClick(): void {
    console.log(this.el);
    this.form?.nativeElement.reset();
  }
}
