import { Component, input } from '@angular/core';
import Note from '../../../models/Note';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
note = input<Note>();
}
