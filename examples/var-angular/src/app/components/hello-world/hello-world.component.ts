import { Component } from '@angular/core'

enum AccountStatus {
  Activated,
  Locked
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  message = 'Hello World'
  name = 'Gordon'
  something = 'a genius'
  isGood = false
  index = 0
  pi = Math.PI
  radius = 5
  num = 13
  person = {
    name: 'Gordon',
    phones: [
      { countryCode: '+1', phoneNumber: '(206) 123-4567', ext: null },
      { countryCode: '+886', phoneNumber: '(02) 2345-2266', ext: null }
    ],
    foo: null
  }
  enumVal = AccountStatus.Locked
  today = new Date()

  showEnumName(enumVal: AccountStatus) {
    const enumName = AccountStatus[enumVal]
    return enumName
  }
}
