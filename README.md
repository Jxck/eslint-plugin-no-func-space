# eslint-plugin-no-func-space

custom ESLint rule, ckeck `function/*no space here!!*/()`

## Rule Details

The following patterns are considered warnings:

```js
var a = function (){}
var a = function () {}
(function () {})()
(function () {}())
```

The following patterns are not warnings:

```js
var a = function(){}
var a = function() {}
(function() {})()
(function() {}())
```

## Usage

```yaml
plugins:
  - no-func-space

rules:
  # Plugins
  no-func-space/no-func-space : 2
```

## License

MIT
