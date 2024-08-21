
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TruncateWordsPipe } from '../truncate-words.pipe';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TruncateWordsPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() products:any;
}
