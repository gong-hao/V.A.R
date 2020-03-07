import { Component, Input } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: 'app-loop-item',
  templateUrl: './loop-item.component.html',
  styleUrls: ['./loop-item.component.scss']
})
export class LoopItemComponent {
  @Input() index: number
  @Input() item: LoopItem
}
