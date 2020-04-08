import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-hero-check',
  templateUrl: './hero-check.component.html',
  styleUrls: ['./hero-check.component.scss']
})
export class HeroCheckComponent {
  @Output() checkChanges = new EventEmitter<boolean>()
  isChecked = false

  toggleChecked() {
    this.isChecked = !this.isChecked
    this.checkChanges.emit(this.isChecked)
  }
}
