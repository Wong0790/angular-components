import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  title = '';
  request = '';

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(): void {
    console.log('Submit');
    this.form?.nativeElement.reset();
  }
}
