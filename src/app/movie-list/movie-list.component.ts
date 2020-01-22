import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //import http
import {Movies} from '../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:Movies;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      title: string;
      releaseYear: number;
      writer: string;
      duration:number;
      summary:string;
      review:string
     }
      this.http.get<ApiResponse>('https://adwera-movie-api.herokuapp.com').subscribe(data => this.movies = data);
  }

}
