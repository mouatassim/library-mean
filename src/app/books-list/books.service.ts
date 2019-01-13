import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book-model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {




  //getBooks using HTTP

    constructor(private http : HttpClient){}


    getBooks(){
        console.log("i'm here");
        
        return this.http.get('http://localhost:8080/books');
    };
  
}

