import { Component, Input, OnInit } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: '[appLoopItemAttr]',
  templateUrl: './loop-item-attr.component.html',
  styleUrls: ['./loop-item-attr.component.scss']
})
export class LoopItemAttrComponent implements OnInit {
  @Input() index: number
  @Input() item: LoopItem

  constructor() { }

  ngOnInit(): void {
  }

}
