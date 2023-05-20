import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetReferencesComponent } from './get-references/get-references.component';
// const jsdom=require("jsdom")
// const {JSDOM} =jsdom
// declare const require:any
// const Cite=require('citation-js')
interface Book {
  author: string;
  year: string;
  title: string;
  publisher?: string;
  volume?: string;
}

interface Conference {
  author: string;
  year: string;
  title: string;
  pages: String;
  information: string;
  
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


import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  books: Book[] = [];
  conferences: Conference[]=[];
  journals: Journal[]=[]
  showBooks = true;
  showConferences = false;
  showJournals = false
  render_dom=false
  styles= [{name :'APA', show  : true} , {name : 'IEEE', show: false}];

  showAPA = true;
  constructor(private diaglog:MatDialog){}
  async ngOnInit(): Promise<void> {
   await this.getBooksReferences();
   
    await this.getConferenceReferences();
    await this.getJournalReferences();
    this.render_dom=true
  }
  async openGetReferences(){
   this.diaglog.open(GetReferencesComponent)
   await this.getBooksReferences();
  await  this.getConferenceReferences();
   await this.getJournalReferences();
  }


  async getBooksReferences() {
    
    await axios
      .get('http://localhost:3000/books',)
      .then((res) => {
        this.books.push(res.data);
      });
  }

  async getConferenceReferences() {
   
    await axios
      .get('http://localhost:3000/conferences', {
        method: 'GET',
      })
      .then((res) => {
        this.conferences.push(res.data);console.log(this.conferences)
      });
  }

  async getJournalReferences() {
    await axios
      .get('http://localhost:3000/journals', {
        method: 'GET',
      })
      .then((res) => {
        this.journals.push(res.data);
      });
  }


}
