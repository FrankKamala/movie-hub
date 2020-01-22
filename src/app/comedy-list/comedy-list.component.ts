import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';//import http
@Component({
  selector: 'app-comedy-list',
  templateUrl: './comedy-list.component.html',
  styleUrls: ['./comedy-list.component.css']
})
export class ComedyListComponent implements OnInit {
comedys:Comedy;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
       name: string;
       author: string;
       description: string;
     }
      //this.http.get<ApiResponse>('url Here').subscribe(data => this.comedys = data);
  }

}
