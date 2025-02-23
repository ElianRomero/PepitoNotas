import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      {
        id: this.creteId(),
        tittle: "hola mundo",
        marked: false
      },
      {
        id: this.creteId(),
        tittle: "Elian cita",
        marked: true
      }
    ]
  }

  updateTitle(id: string, newTitle: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;

    updatedNote.tittle = newTitle;
  }
  updateMarked(id: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;

    updatedNote.marked = !updatedNote.marked;
  }

  createNote(note: Note) {
    this.notes.unshift(note);
  }

  creteId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
}
