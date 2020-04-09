import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-remove-api',
  templateUrl: './remove-api.component.html',
  styleUrls: ['./remove-api.component.scss']
})
export class RemoveApiComponent {
  @ViewChild('id') idRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  removeSkill() {
    this.http
      .delete<{ message: string }>('http://localhost:4000/skill/' + this.idRef.nativeElement.value)
      .subscribe(
        data => alert(data.message),
        error => console.log(error)
      )
  }
}
