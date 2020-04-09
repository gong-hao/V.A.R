import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-detail-api',
  templateUrl: './detail-api.component.html',
  styleUrls: ['./detail-api.component.scss']
})
export class DetailApiComponent implements OnInit {
  skill = null

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id') || 1
    this.detailSkill(id)
  }

  detailSkill(id) {
    this.http
      .get<any[]>('http://localhost:4000/skill/' + id)
      .subscribe(
        data => this.skill = data,
        error => console.log(error)
      )
  }
}
