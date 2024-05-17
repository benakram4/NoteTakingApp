import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { MOCK_NOTES } from '../../mock/notes';
import Quill from 'quill';

// this makes sure that the content is sanitized, which makes sure the html is safe to render
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
@Component({
  selector: 'app-note-detail-component',
  templateUrl: './note-detail-component.component.html',
  styleUrl: './note-detail-component.component.css',
})
export class NoteDetailComponentComponent implements OnInit {
  note: Note = MOCK_NOTES[0];
  content: string | null = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.content =
      this.sanitizer.sanitize(SecurityContext.HTML, this.note.content) ?? '';

    const quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Compose an epic note...',
    });
    quill.clipboard.dangerouslyPasteHTML(0, this.content);

    // Add event listener for text changes
    quill.on('text-change', () => {
      this.handleTextChange(quill.getText());
    });
  }

  handleTextChange(textValue: string): void {
    console.log('Text changed:', textValue);
  }
}
