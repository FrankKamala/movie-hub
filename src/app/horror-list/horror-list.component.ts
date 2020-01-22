import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';//import http
import {Horror} from '../horror';
@Component({
  selector: 'app-horror-list',
  templateUrl: './horror-list.component.html',
  styleUrls: ['./horror-list.component.css']
})
export class HorrorListComponent implements OnInit {
horrors:Horror; //Uncomment Me
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
       title: string;
       releaseyear: string;
       writter: string;
       duration:number;
       summary:string;
       review:string;
     }
     //this.http.get<ApiResponse>('url Here').subscribe(data => this.horrors = data);

  }

}
