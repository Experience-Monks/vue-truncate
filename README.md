# vue-truncate

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A Vue filter that will truncate text to a specified length.

## Usage


```
var Vue = require('vue');
Vue.use(require('../../util/vue-truncate'));
```
  
`<span v-text="item.description+'...'; | truncate 99 '...'"></span>`

The truncate filter requires a length argument. It can also accept a second argument being the clamp or terminal string placed after truncated text.

[![NPM](https://nodei.co/npm/vue-truncate.png)](https://www.npmjs.com/package/vue-truncate)

## License

MIT, see [LICENSE.md](http://github.com/jam3/vue-truncate/blob/master/LICENSE.md) for details.
