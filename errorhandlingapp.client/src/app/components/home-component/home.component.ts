import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';
import { DemoComponent } from '../demo-component/demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatSnackBarModule, DemoComponent],
})
export class HomeComponent {
  apiService = inject(ApiService);

  success() {
    this.apiService.success().subscribe();
  }

  error() {
    this.apiService.error().subscribe();
  }

  upgrade() {
    this.apiService.upgrade().subscribe();
  }
}
