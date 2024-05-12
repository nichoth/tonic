![tests](https://github.com/bicycle-codes/tonic/actions/workflows/nodejs.yml/badge.svg)
[![module](https://img.shields.io/badge/module-ESM-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bicycle-codes/tonic/fork/readme-tonic-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/bicycle-codes/tonic/fork/readme-tonic.png">
  <img alt="tonic" src="https://raw.githubusercontent.com/bicycle-codes/tonic/fork/readme-tonic.png">
</picture>

<p align="center">
  https://tonicframework.dev
</p>

<br/>
<br/>

Tonic is a low profile component framework for the web. It's one file, less than 3kb gzipped and has no dependencies. It's designed to be used with modern Javascript and is compatible with all modern browsers and built on top of Web Components.

[See the API docs](https://bicycle-codes.github.io/tonic/index.html)

## Install

```sh
npm install @bicycle-codes/tonic
```

## Use

```js
import Tonic from '@bicycle-codes/tonic'

class MyGreeting extends Tonic {
  render () {
    return this.html`<div>Hello, World.</div>`
  }
}

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
This is a fork of [@socketsupply/tonic](https://github.com/socketsupply/tonic)

### additions
Things added to the forked version

#### `tag`
Get the HTML tag name given a Tonic class.

#### types
See [./src/index.d.ts](./src/index.d.ts)

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

## Useful links
- [Tonic components](https://github.com/socketsupply/components)
- [Migration from the early versions of Tonic](./MIGRATION.md)
- [API](./API.md)
- [Troubleshooting](./HELP.md)

MIT License
 