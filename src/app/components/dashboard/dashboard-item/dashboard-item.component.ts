import { Component, Input } from '@angular/core';
import { ArticleHeader } from '../../../types/articleHeader';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  @Input({ required: true }) articleHeader!: ArticleHeader;
}
