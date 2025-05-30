import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-demo-style',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './demo-style.component.html',
  styleUrl: './demo-style.component.css',
})
export class DemoStyleComponent {}
