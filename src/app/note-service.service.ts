import { Injectable } from '@angular/core';
import { MOCK_NOTES } from '../mock/notes';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})

export class NoteServiceService {

  private notes = MOCK_NOTES;

  constructor() { }

  // Get all notes
  getNotes(): Note[] {
    return this.notes;
  }

  // Get note by ID
  getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  // Delete note by ID
  deleteNoteById(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  // Update note
  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }
}
