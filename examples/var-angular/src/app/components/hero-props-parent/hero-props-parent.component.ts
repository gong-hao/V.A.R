import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-props-parent',
  templateUrl: './hero-props-parent.component.html',
  styleUrls: ['./hero-props-parent.component.scss']
})
export class HeroPropsParentComponent {
  name = 'Riven'
  title = 'The Exile'
  health = 560
  attackDamage = 64
  skills = [
    { id: 1, name: 'Runic Blade', key: null },
    { id: 2, name: 'Broken Wings', key: 'q' },
    { id: 3, name: 'Ki Burst', key: 'w' },
    { id: 4, name: 'Valor', key: 'e' },
    { id: 5, name: 'Blade of the Exile', key: 'r' },
    { id: 6, name: 'Wind Slash', key: 'r' }
  ]
  isHighlight = true
}
