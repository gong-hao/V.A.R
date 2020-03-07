import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @ViewChild('userInput') userInputRef: ElementRef

  val = 10
  number = Number

  addVal() {
    this.val += Number(this.userInputRef.nativeElement.value) || 0
  }

  addWithVal(val: string) {
    this.val += Number(val) || 0
  }

  hi(event: Event) {
    alert(`${event.type} event`)
  }

  foo(event: Event, memo: string = null) {
    console.log(event.currentTarget, memo)
  }
}
