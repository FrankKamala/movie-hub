import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';//import http
import {Comedy} from '../comedy';
@Component({
  selector: 'app-comedy-list',
  templateUrl: './comedy-list.component.html',
  styleUrls: ['./comedy-list.component.css']
})
export class ComedyListComponent implements OnInit {
 comedys:Comedy; //Uncomment Me
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      title: string;
      releaseyear: string;
      writter: string;
      duration:number;
      summary:string;
      review:string
     }
      //this.http.get<ApiResponse>('url Here').subscribe(data => this.comedys = data);
  }

}
