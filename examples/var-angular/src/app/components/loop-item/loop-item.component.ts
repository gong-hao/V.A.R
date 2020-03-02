import { Component, Input, OnInit } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: 'app-loop-item',
  templateUrl: './loop-item.component.html',
  styleUrls: ['./loop-item.component.scss']
})
export class LoopItemComponent implements OnInit {
  @Input() index: number
  @Input() item: LoopItem

  constructor() { }

  ngOnInit(): void {
  }

}
