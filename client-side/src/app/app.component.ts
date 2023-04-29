import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetReferencesComponent } from './get-references/get-references.component';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bivliography';
  constructor(private diaglog:MatDialog){}
  openGetReferences(){
    this.diaglog.open(GetReferencesComponent)
  }
  addReferences(){
 axios.post('http://localhost:3000/book').then(res=>console.log(res.data))
  }
}
