import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ConditionComponent } from './components/condition/condition.component'
import { EventComponent } from './components/event/event.component'
import { HelloWorldComponent } from './components/hello-world/hello-world.component'
import { HeroCheckParentComponent } from './components/hero-check-parent/hero-check-parent.component'
import { HeroCheckComponent } from './components/hero-check/hero-check.component'
import { HeroEventParentComponent } from './components/hero-event-parent/hero-event-parent.component'
import { HeroEventComponent } from './components/hero-event/hero-event.component'
import { HeroPropsParentComponent } from './components/hero-props-parent/hero-props-parent.component'
import { HeroPropsComponent } from './components/hero-props/hero-props.component'
import { HeroStateComponent } from './components/hero-state/hero-state.component'
import { HiComponent } from './components/hi/hi.component'
import { LoopItemAttrComponent } from './components/loop-item-attr/loop-item-attr.component'
import { LoopItemComponent } from './components/loop-item/loop-item.component'
import { LoopComponent } from './components/loop/loop.component'
import { TrackByPropertyPipe } from './pipes/track-by-property.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoopComponent,
    LoopItemComponent,
    LoopItemAttrComponent,
    TrackByPropertyPipe,
    ConditionComponent,
    EventComponent,
    HiComponent,
    HeroStateComponent,
    HeroPropsParentComponent,
    HeroPropsComponent,
    HeroCheckComponent,
    HeroCheckParentComponent,
    HeroEventComponent,
    HeroEventParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
