import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ConditionComponent } from './components/condition/condition.component'
import { HelloWorldComponent } from './components/hello-world/hello-world.component'
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
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
