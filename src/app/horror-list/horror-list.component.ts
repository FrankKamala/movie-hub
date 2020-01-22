import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';//import http
@Component({
  selector: 'app-horror-list',
  templateUrl: './horror-list.component.html',
  styleUrls: ['./horror-list.component.css']
})
export class HorrorListComponent implements OnInit {
horrors:Horror;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
       title: string;
       releaseyear: string;
       writter: string;
       duration:number;
       summary:string;
     }
     //this.http.get<ApiResponse>('url Here').subscribe(data => this.horrors = data);
     //public writter:string, public duration:number; public summary: string
  }

}
