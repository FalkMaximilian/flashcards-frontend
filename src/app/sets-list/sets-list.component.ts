import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, HostBinding, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SetListElementComponent } from '../set-list-element/set-list-element.component';
import { AuthService } from '../auth.service';
import { FCSet } from '../set';

export interface ApiResponse {
  sets: FCSet[];
}


@Component({
  selector: 'app-sets-list',
  standalone: true,
  imports: [FormsModule, NgFor, SetListElementComponent, NgIf, ReactiveFormsModule],
  templateUrl: './sets-list.component.html',
  styleUrl: './sets-list.component.css'
})
export class SetsListComponent implements OnInit {
  @HostBinding('class') classes = 'w-full p-4 md:p-6 flex flex-col';


  options = [10, 20, 30];
  pageSize: number = this.options[0];
  currentPage: number = 1;
  sets: FCSet[] = [];

  authService = inject(AuthService);

  setName: FormControl = new FormControl('', [Validators.required]);
  
  ngOnInit(): void {
    this.fetchData().subscribe((response: ApiResponse) => {
      this.sets = response.sets;
    });
  }

  onInputChange(event: any) {
    this.fetchData().subscribe((response: ApiResponse) => {
      console.log(response)
      this.sets = response.sets;
    })
  }

  fetchData(): Observable<ApiResponse> {

    console.log("Fetching data...");
    const jwtToken = this.authService.getJwtToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    })

    return this.http.get<ApiResponse>('https://go-webserver-production.up.railway.app/api/sets', { headers });
  }

  submitNewSet(): void {
    console.log(this.setName.value);

    const jwtToken = this.authService.getJwtToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`  // Set the Authorization header with the JWT token
    });

    this.http.post('https://go-webserver-production.up.railway.app/api/sets', { name: this.setName.value }, { headers }).subscribe({
      next: (response) => {
        console.log(response);
      }
    });

  }

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
}
