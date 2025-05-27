import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { EvenNumberPipe } from '../../even-number.pipe';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, EvenNumberPipe,],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class AddComponent {
  arritem: number[] = [2, 3, 4, 5, 90, 34, 77,3,4, 40];
}
