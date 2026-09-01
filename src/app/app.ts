import { Component, signal } from '@angular/core';
import { Quiz } from './quiz/quiz';

@Component({
  imports: [Quiz],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('maison-harry-potter');
}
