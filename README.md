![tests](https://github.com/substrate-system/tonic/actions/workflows/nodejs.yml/badge.svg)
[![module](https://img.shields.io/badge/module-ESM-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/substrate-system/tonic/fork/readme-tonic-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/substrate-system/tonic/fork/readme-tonic.png">
  <img alt="tonic" src="https://raw.githubusercontent.com/substrate-system/tonic/fork/readme-tonic.png">
</picture>

<p align="center">
  https://tonicframework.dev
</p>

<br/>
<br/>

Tonic is a low profile component framework for the web. It's one file, less than 3kb gzipped and has no dependencies. It's designed to be used with modern Javascript and is compatible with all modern browsers and built on top of Web Components.

[See the API docs](https://substrate-system.github.io/tonic/index.html)

The tl;dr is that this allows you to pass full JS objects between components, not just strings as in HTML.

## Contents

<!-- toc -->

- [Install](#install)
- [Use](#use)
- [fork](#fork)
  * [types](#types)
  * [`tag`](#tag)
  * [`emit`](#emit)
  * [`static event`](#static-event)
  * [`dispatch`](#dispatch)
- [Useful links](#useful-links)

<!-- tocstop -->

## Install

```sh
npm i -S @substrate-system/tonic
```

## Use

```js
import Tonic from '@substrate-system/tonic'
```

You can use functions as components. They can be async or even an async generator function.

```js
async function MyGreeting () {
  const data = await (await fetch('https://example.com/data')).text()
  return this.html`<h1>Hello, ${data}</h1>`
}
```

Or you can use classes. Every class must have a render method.

```js
class MyGreeting extends Tonic {
  async * render () {
    yield this.html`<div>Loading...</div>`

    const data = await (await fetch('https://example.com/data')).text()
    return this.html`<div>Hello, ${data}.</div>`
  }
}
```

```js
Tonic.add(MyGreeting, 'my-greeting')
```

After adding your Javascript to your HTML, you can use your component anywhere.

```html
<html>
  <head>
    <script src="my-greeting.js"></script>
  </head>
  <body>
    <my-greeting></my-greeting>
  </body>
</html>
```

## fork
This is a fork of [@socketsupply/tonic](https://github.com/socketsupply/tonic).

See [API docs](https://substrate-system.github.io/tonic/).

### types
See [src/index.ts](./src/index.ts).

### `tag`
Get the HTML tag name given a Tonic class.

```ts
static get tag():string;
```

```js
class ExampleTwo extends Tonic {
    render () {
        return this.html`<div>example two</div>`
    }
}

ExampleTwo.tag
// => 'example-two'
```

### `emit`
Emit namespaced events, following a naming convention. The return value is the call to [element.dispatchEvent()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent).

Given an event name, the dispatched event will be prefixed with the element name, for example, `my-element:event-name`.

```ts
emit (type:string, detail:string|object|any[] = {}, opts:Partial<{
    bubbles:boolean;
    cancelable:boolean
}> = {}):boolean
```

#### emit example

```js
class EventsExample extends Tonic {
  // ...
}

// EventsExample.event('name') will return the namespace event name
const evName = EventsExample.event('testing')

document.body.addEventListener(evName, ev => {
  // events bubble by default
  console.log(ev.type)  // => 'events-example:testing'
  console.log(ev.detail)  // => 'some data'
})

const el = document.querySelector('events-example')
// use default values for `bubbles = true` and `cancelable = true`
el.emit('testing', 'some data')

// override default values, `bubbles` and `cancelable`
el.emit('more testing', 'some data', {
  bubbles: false
  cancelable: false
})
```

### `static event`
Return the namespaced event name given a string.

```ts
class {
  static event (type:string):string {
      return `${this.tag}:${type}`
  }
}
```

#### example
```js
class EventsExample extends Tonic {
  // ...
}

EventsExample.event('testing')
//  => 'events-example:testing'
```

### `dispatch`
Emit a regular, non-namespaced event.

```ts
{
  dispatch (eventName:string, detail = null):void
}
```

#### `dispatch` example

```js
class EventsExample extends Tonic {
  // ...
}

document.body.addEventListener('testing', ev => {
  // events bubble by default
  console.log(ev.type)  // => 'testing'
  console.log(ev.detail)  // => 'some data'
})

const el = document.querySelector('events-example')
el.dispatch('testing', 'some data')

// override default values
el.dispatch('more testing', 'some data', {
  bubbles: false
  cancelable: false
})
```

## Useful links
- [Tonic components](https://github.com/socketsupply/components)
- [Migration from the early versions of Tonic](./MIGRATION.md)
- [API](./API.md)
- [Troubleshooting](./HELP.md)
- [Web Component lifecycle methods](https://gomakethings.com/the-web-component-lifecycle-methods/)
- [How to detect when attributes change on a Web Component](https://gomakethings.com/how-to-detect-when-attributes-change-on-a-web-component/)
- [API docs generated from typescript](https://substrate-system.github.io/tonic/classes/Tonic.html)
