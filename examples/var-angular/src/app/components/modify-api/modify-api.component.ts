import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-modify-api',
  templateUrl: './modify-api.component.html',
  styleUrls: ['./modify-api.component.scss']
})
export class ModifyApiComponent {
  @ViewChild('id') idRef: ElementRef
  @ViewChild('name') nameRef: ElementRef
  @ViewChild('key') keyRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  modifySkill() {
    const modifiedSkill = {
      name: this.nameRef.nativeElement.value,
      key: this.keyRef.nativeElement.value
    }
    this.http
      .put<{ message: string }>(
        'http://localhost:4000/skill/' + this.idRef.nativeElement.value,
        modifiedSkill
      )
      .subscribe(
        data => alert(data.message),
        error => console.log(error)
      )
  }
}
