import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({

  selector: 'app-dashboard',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly panelOpenState = signal(false);

  constructor(private router: Router) { }

  selectedOption: string = '';

  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  onNext() {
    this.router.navigate(['/paper-application'])
  }
}
