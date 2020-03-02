import { KeyValue } from '@angular/common'
import { Component, OnInit } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, item: LoopItem) {
    return item.id
  }

  trackByKey(index: number, item: KeyValue<string, any>) {
    return item.key
  }
}
