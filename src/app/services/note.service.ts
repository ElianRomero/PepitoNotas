import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes : Note[] ;

  constructor() { 
    this.notes= [
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
  creteId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
}
