import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule,  MatCardModule],
  template: `
    <mat-card>
      <mat-card-title>{{ title }}</mat-card-title>
      <mat-card-content>{{ value }}</mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent {
  @Input() title!: string;
  @Input() value!: string;
}
