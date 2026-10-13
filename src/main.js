/*
 * Copyright (c) 2018-present Steven Spungin
 * SPDX-License-Identifier: MIT
 */

/**
 * Adds $window and $document to each component for use in attribute templates.
 * Examples:
 * @click="$window.console.log('Clicked!')"
 * @click="$window.alert('Clicked!')"
 *
 * Both are available from the first render. Once a component is mounted they
 * follow the document that owns its element, so a component rendered into an
 * iframe sees that iframe's window. Without a DOM (server rendering) both are
 * undefined.
 */
function getDocument(vm) {
    if (vm.$el && vm.$el.ownerDocument) {
        return vm.$el.ownerDocument
    }
    return typeof document !== 'undefined' ? document : undefined
}

function getWindow(vm) {
    const doc = getDocument(vm)
    return doc ? doc.defaultView || doc.parentWindow : undefined
}

const WindowPlugin = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$document', {
            configurable: true,
            get() {
                return getDocument(this)
            }
        })
        Object.defineProperty(Vue.prototype, '$window', {
            configurable: true,
            get() {
                return getWindow(this)
            }
        })
    }
}

export default WindowPlugin
