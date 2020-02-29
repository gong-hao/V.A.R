# How to write hello world programs in V.A.R

## What is a hello world program?
Hello world program is the simplest program that the language or framework or library wants to show the first impression to the developers. It should be simple and stupid enough that even newbie can understand what the heck you're doing. <del>However, in most cases, it is only used to make memes to laugh at other competitors.</del>

## Vue
```html
<div id="app">
  {{message}}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

[https://vuejs.org/v2/guide/](https://vuejs.org/v2/guide/)

## Angular
Sorry, but I don't think there is an official hello world demo for Angular.
They just dive into the CLI and show you how to play some template syntaxes.
There might be some ways to play Angular without CLI, but I don't think they are practical.
Playing Angular without CLI is a kind of dead end. 😢

> If you overcome the TypeScript, CLI, and folder structure parts and you're able to run the project, this is probably the hello world parts.

```html
<!--
  This is at "src/app/app.component.html".
  I removed the other welcome content.
-->
<span>{{title}} is running!</span>
```

```ts
// This is at "src/app/app.component.ts".
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, world!'
}
```

[https://angular.io/start](https://angular.io/start)

## React
```html
<div id="root"></div>
```

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```

[https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html)

## Scores
|    Vue     | Angular |  React   |
| :--------: | :-----: | :------: |
| ⭐️⭐️⭐️⭐️⭐️ |  ⭐️⭐️   | ⭐️⭐️⭐️⭐️ |

## Conclusions
- Vue does a good job for the hello world program because this is one of its design goals - make a framework that is easy to use right away.
- Sorry, Angular is tough for a beginner.
- React does not bad but it's a little bit weird to see JSX for the first time.
