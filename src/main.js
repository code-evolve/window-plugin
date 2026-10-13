/*
 * Copyright (c) 2018-present Steven Spungin
 * SPDX-License-Identifier: MIT
 */

import Vue from 'vue'

/**
 * Adds $window and $document to each component for use in attribute templates.
 * Examples:
 * @click="$window.console.log('Clicked!')"
 * @click="$window.alert('Clicked!')"
 */
const WindowPlugin = {
    install(Vue, options) {
        function getDocument(el) {
            const doc = el.ownerDocument
            return doc
        }

        function getWindow(el) {
            const doc = el.ownerDocument
            return doc.defaultView || doc.parentWindow
        }

        Vue.mixin({
            mounted() {
                this.$window = getWindow(this.$el)
                this.$document = getDocument(this.$el)
            }
        })
    }
}

export default WindowPlugin
