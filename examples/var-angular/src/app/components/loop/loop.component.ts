import { KeyValue } from '@angular/common'
import { Component } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent {
  arrayRef = Array
  items = [
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar' },
    { id: 3, text: 'woo' }
  ]
  person = {
    name: 'Gordon',
    age: 18,
    power: 999,
    isSuper: true
  }

  trackById(index: number, item: LoopItem) {
    return item.id
  }

  trackByKey(index: number, item: KeyValue<string, any>) {
    return item.key
  }

  getItems(take: number) {
    return [
      { id: 4, text: 'foo' },
      { id: 5, text: 'bar' },
      { id: 6, text: 'woo' }
    ].slice(0, take)
  }
}
