# window-plugin

[![npm](https://img.shields.io/npm/v/window-plugin.svg)](https://www.npmjs.com/package/window-plugin)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The Vue WindowPlugin adds `$window` and `$document` DOM objects to each Vue 2 component.
This is helpful when accessing the DOM from attribute templates, allowing you
to call DOM methods without declaring a method.

For example, you can open alerts, log events, or open URLs in new tabs.

# Usage
```html
<button @click='$window.alert("You clicked a button.")'>Click Me</button>
<button @click='$window.console.log("A button was clicked.")'>Click Me</button>
<button @click='$window.open("https://example.com/", "_blank")'>Click Me</button>
<h1 v-text='$document.title' />
```

Both properties are available from the first render. Once a component is mounted
they follow the document that owns its element, so a component rendered into an
iframe sees that iframe's `window`. Without a DOM (server rendering) both are `undefined`.

# Installation
Install the package via NPM
```
npm install --save window-plugin
```
Install the plugin before creating your Vue
```js
import Vue from 'vue'

import WindowPlugin from 'window-plugin'
Vue.use(WindowPlugin)

new Vue({
    // your code here
})
```

# Dependencies
None at runtime. `vue` 2.x is a peer dependency.

# Development
```
git clone https://github.com/code-evolve/window-plugin.git
cd window-plugin
npm install
npm test
npm run build
```

# Issues
Report bugs and requests at https://github.com/code-evolve/window-plugin/issues.

# License
[MIT](LICENSE)
