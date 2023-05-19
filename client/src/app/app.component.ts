import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms'
import { GetReferencesComponent } from './get-references/get-references.component';
import axios from 'axios';

interface Book {
  author: string;
  year: string;
  title: string;
  publisher: string;
  volume: string;
}

interface Conference {
  author: string;
  year: string;
  title: string;
  information: string;
  pages: String;
}

interface Journal {
  author: string;
  year: string;
  title: string;
  information: string;
  pages: string;
  name: string;
  volume: string;
  issueNumber: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[] = [];
  conferences: Conference[]=[];
  journals: Journal[]=[]
  showBooks = true;
  showConferences = false;
  showJournals = false
  styles= [{name :'APA', show  : true} , {name : 'IEEE', show: false}];

  showAPA = false;

  title = 'Bivliography';
  constructor(private diaglog: MatDialog) {}

  ngOnInit() {
    this.getBooksReferences();
    this.getConferenceReferences();
    this.getJournalReferences();
  }
  openGetReferences() {
    this.diaglog.open(GetReferencesComponent);
  }

  async getBooksReferences() {
    await axios
      .get('http://localhost:3000/books', {
        method: 'GET',
      })
      .then((res) => {
        this.books = res.data;
      });
  }

  async getConferenceReferences() {
    await axios
      .get('http://localhost:3000/conferences', {
        method: 'GET',
      })
      .then((res) => {
        this.conferences = res.data;
      });
  }

  async getJournalReferences() {
    await axios
      .get('http://localhost:3000/journals', {
        method: 'GET',
      })
      .then((res) => {
        this.journals = res.data;
      });
  }


  addReferences() {
    axios
      .post('http://localhost:3000/books')
      .then((res) => console.log(res.data));
  }
}
