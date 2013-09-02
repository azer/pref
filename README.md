## pref

Remember user preferences via LocalStorage

```js
pref = require('pref')

pref('show-toolbar', false)
pref('show-toolbar')
// => false

pref('foobar', { foo: 123, bar: 456 })
pref('foobar')
// => { foo: 123, bar: 456 }
```

## Install

```bash
$ npm install pref
```
