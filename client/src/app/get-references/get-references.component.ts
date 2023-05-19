import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
export interface book {
  id: number;
  author_name: String;
  title: String;
  publication_year: Date;
  info: string;
  volume_number: number;
  style: string;
}

// convert the citation object to a formatted reference using a citation style

interface Book {
  author: string;
  year: string;
  title: string;
  publisher: string;
  volume: string;
}

@Component({
  selector: 'app-get-references',
  templateUrl: './get-references.component.html',
  styleUrls: ['./get-references.component.css'],
})
export class GetReferencesComponent {
  constructor(public sanitizer: DomSanitizer) {}

  data: Book[]  = [];
  async ngOnInit() {
    await axios.get('http://localhost:3000/books',{
      method: 'GET'
    }).then((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
}
