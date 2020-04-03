import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero-props',
  templateUrl: './hero-props.component.html',
  styleUrls: ['./hero-props.component.scss']
})
export class HeroPropsComponent {
  @Input() name: string = 'Hero Name'
  @Input() title: string = 'Hero Title'
  @Input() health: number = 0
  @Input() attackDamage: number = 0
  @Input() skills: any[] = []
}
