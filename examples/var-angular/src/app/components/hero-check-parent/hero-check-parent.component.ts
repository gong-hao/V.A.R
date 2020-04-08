import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-check-parent',
  templateUrl: './hero-check-parent.component.html',
  styleUrls: ['./hero-check-parent.component.scss']
})
export class HeroCheckParentComponent {
  isChecked = false

  onCheckChanges(isChecked: boolean) {
    this.isChecked = isChecked
  }
}
