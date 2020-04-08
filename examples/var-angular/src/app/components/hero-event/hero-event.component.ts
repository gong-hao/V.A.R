import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-hero-event',
  templateUrl: './hero-event.component.html',
  styleUrls: ['./hero-event.component.scss']
})
export class HeroEventComponent {
  @Output() selectionChanges = new EventEmitter<any[]>()
  @Input() items: any[]
  isSelectedAll = false

  onSelectionsChanged() {
    const selectedItems = this.items.filter(x => x.isSelected)
    this.selectionChanges.emit(selectedItems)
  }

  toggleSelectAll() {
    this.isSelectedAll = !this.isSelectedAll
    for (const item of this.items) {
      item.isSelected = this.isSelectedAll
    }
    this.onSelectionsChanged()
  }

  toggleSelectItem(item) {
    item.isSelected = !item.isSelected
    this.isSelectedAll = this.items.every(x => x.isSelected)
    this.onSelectionsChanged()
  }
}
