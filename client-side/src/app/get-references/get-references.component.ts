import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
export interface book {
  id:number,
  author_name:String,
  title:String,
  publication_year:Date,
  info:string ,
  volume_number:number,
  style:string,
}

// convert the citation object to a formatted reference using a citation style


@Component({
  selector: 'app-get-references',
  templateUrl: './get-references.component.html',
  styleUrls: ['./get-references.component.css']
})

export class GetReferencesComponent{
     constructor(public sanitizer:DomSanitizer){}


displayedColumns: string[] = ['id', 'title', 'author_name' ,'volume_number','year']; 
  dataSource!: MatTableDataSource<book>;
 data=[]
ELEMENT_DATA: book[] = [];
 async ngOnInit(){
  await  axios.get('http://localhost:3000/book',{
      params:{
        style:"IEEE"
      }
    }).then(res=>{this.data=res.data})

  }

  }
