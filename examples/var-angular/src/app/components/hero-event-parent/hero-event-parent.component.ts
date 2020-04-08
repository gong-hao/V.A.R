import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-event-parent',
  templateUrl: './hero-event-parent.component.html',
  styleUrls: ['./hero-event-parent.component.scss']
})
export class HeroEventParentComponent {
  selectedItems = []
  skills = [
    { id: 1, name: 'Runic Blade' },
    { id: 2, name: 'Broken Wings' },
    { id: 3, name: 'Ki Burst' },
    { id: 4, name: 'Valor' },
    { id: 5, name: 'Blade of the Exile' },
    { id: 6, name: 'Wind Slash' }
  ]

  onSelectionChanges(selectedItems: any[]) {
    this.selectedItems = selectedItems
  }
}
