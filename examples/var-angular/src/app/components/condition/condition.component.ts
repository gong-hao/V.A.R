import { Component } from '@angular/core'

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent {
  isShow = true
  option = 'Z'
  val = 10

  showIfEven(num: number) {
    return num % 2 === 0
  }

  toggle() {
    this.isShow = !this.isShow
    this.option = this.isShow ? 'A' : 'B'
    this.val = Math.floor(Math.random() * 20) + 1
  }
}
