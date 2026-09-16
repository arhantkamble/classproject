import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app_component.html',
  styleUrl: './app_component.scss'
})
export class AppComponent {
  title = 'classproject';
}