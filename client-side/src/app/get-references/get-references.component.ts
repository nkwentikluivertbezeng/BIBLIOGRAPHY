import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
import { book, conference_paper } from '@prisma/client';
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


// convert the citation object to a formatted reference using a citation style

  
@Component({
  selector: 'app-get-references',
  templateUrl: './get-references.component.html',
  styleUrls: ['./get-references.component.css']
})

export class GetReferencesComponent{
  panelOpenState = false;
     constructor(public sanitizer:DomSanitizer){}

     types= [{name :'BOOK', value  : "book"} , {name : 'JOURNAL', value: "journal"}, {name : 'CONFERENCE', value: "conference"}];
     styles= [{name :'APA', value  : "apa"} , {name : 'IEEE', value: "IEEE"},{name : 'CHICAGO', value: "chicago"}];

     type = "book";
     style="apa"
     addBy="file"
     Conference_paper:Conference={
      author: '',
      year:'',
      title: '',
      pages: '',
      information: ''
     }
     book:Book={
      author: '',
      year: '',
      title: '',
      publisher: '',
      volume:''
     }
     journal:Journal={
      author: '',
      year: '',
      title: '',
      information: '',
      pages:'',
      name: '',
      volume: '',
      issueNumber: '',
     }
     async addFileReferences(){
      // const html ='<div class "references"> <p> Smith, J.(2001).<i>Sample reference <i> . Journal of bibliographic studies,1(1),1-10.<p><div>';
      console.log(this.type)
      await  axios.get('http://localhost:3000/add_reference',{
       
        params:{
          type:this.type,
          style:this.style
        }
      }).then(res=>{alert(res.data)})
  
    }
    async addFormReferences(){
      // const html ='<div class "references"> <p> Smith, J.(2001).<i>Sample reference <i> . Journal of bibliographic studies,1(1),1-10.<p><div>';
  if(this.type=="book"){
    console.log(this.book)
      await  axios.post('http://localhost:3000/book',{
       
        params:{
         book:this.book
        }
      }).then(res=>{alert(res.data)})
    }

    if(this.type=="conference"){
      await  axios.post('http://localhost:3000/conference',{
       
        params:{
         conference:this.Conference_paper
        }
      }).then(res=>{alert(res.data)})
    }

    if(this.type=="journal"){
      await  axios.post('http://localhost:3000/journal',{
       
        params:{
         journal:this.journal
        }
      }).then(res=>{alert(res.data)})
    }
  }
 async ngOnInit(){

  }

  }
