import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  private  http;
  public bookList:any;

    constructor(private httpClient:HttpClient){
      this.http=httpClient;
    }
  ngOnInit(): void {
    this.loadBook();

  }
  loadBook(){
    this.http.get("http://localhost/8080/book/grt-books").subscribe(data=>{
      console.log(data);
    });
  }
}
