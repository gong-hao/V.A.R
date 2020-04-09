import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.scss']
})
export class CreateApiComponent {
  @ViewChild('name') nameRef: ElementRef
  @ViewChild('key') keyRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  createSkill() {
    const newSkill = {
      name: this.nameRef.nativeElement.value,
      key: this.keyRef.nativeElement.value
    }
    this.http
      .post<{ message: string }>('http://localhost:4000/skill/', newSkill)
      .subscribe(
        data => alert(data.message),
        error => console.log(error)
      )
  }
}
