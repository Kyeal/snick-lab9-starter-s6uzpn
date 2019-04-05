import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//standard imports

import {environment} from '../environment';

//standard component boilerplate code
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  records;

  constructor(private http:HttpClient) { }//inject module into component

  ngOnInit() {
    //use module to perfrom ajax, must use arrow anonymous function
    this.http.get(environment.BASE_URL + "/api/pokemon").subscribe(data=>{
      this.records = data;//set records to data received 
    })
  }
}