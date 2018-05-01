The Vue WindowPlugin adds $window and $document DOM objects to each Vue component.
This is helpful when accessing DOM from attribute templates.

# Usage
```html
<button @click='$window.alert("You clicked a button.")'>Click Me</button>
<button @click='$window.console.log("A button was clicked.")'>Click Me</button>
<h1 :v-text='$document.title' />
```

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