import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.scss']
})
export class ListApiComponent implements OnInit {
  skills = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.listSkills()
  }

  listSkills() {
    this.http
      .get<any[]>('http://localhost:4000/skill')
      .subscribe(
        data => this.skills = data,
        error => console.log(error)
      )
  }
}
