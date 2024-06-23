import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SetListElementComponent } from '../set-list-element/set-list-element.component';

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface ApiResponse {
  results: Result[];
  info: Info;
}


@Component({
  selector: 'app-sets-list',
  standalone: true,
  imports: [FormsModule, NgFor, SetListElementComponent],
  templateUrl: './sets-list.component.html',
  styleUrl: './sets-list.component.css'
})
export class SetsListComponent implements OnInit {
  options = [10, 20, 30];
  pageSize: number = this.options[0];
  currentPage: number = 1;
  results: Result[] = [];

  ngOnInit(): void {
    this.fetchData().subscribe((response: ApiResponse) => {
      this.results = response.results;
      this.results.unshift({
        gender: 'male',
        name: {title: 'Dr.', first: 'Karl Heinz Friedrich', last: 'Doofenschmirtz'},
        location: {street: {number: 0, name: ''}, city: '', state: '', country: '', postcode: '', coordinates: {latitude: '', longitude: ''}, timezone: {offset: '', description: ''}},
        email: '',
        login: {uuid: '', username: '', password: '', salt: '', md5: '', sha1: '', sha256: ''},
        dob: {date: '', age: 0},
        registered: {date: '', age: 0},
        phone: '',
        cell: '',
        id: {name: '', value: ''},
        picture: {large: '', medium: '', thumbnail: ''},
        nat: ''
      })
    });
  }

  onInputChange(event: any) {
    this.fetchData().subscribe((response: ApiResponse) => {
      this.results = response.results;
    })
  }

  fetchData(): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('page', this.currentPage.toString())
      .set('results', this.pageSize.toString());

    return this.http.get<ApiResponse>('https://randomuser.me/api/', { params });
  }

  getList(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
  
    return this.http.get('https://api.example.com/your-endpoint', { params });
  }

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
}
