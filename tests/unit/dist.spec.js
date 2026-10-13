/*
 * Copyright (c) 2018-present Steven Spungin
 * SPDX-License-Identifier: MIT
 */
import {createRequire} from 'node:module'
import {describe, it, expect} from 'vitest'
import {createLocalVue, mount} from '@vue/test-utils'
import EsmPlugin from '../../dist/index.mjs'

const require = createRequire(import.meta.url)
const CjsPlugin = require('../../dist/index.js')

const SampleComponent = {
    render(h) {
        return h('div', this.$document.title)
    }
}

describe.each([
    ['ES module build', EsmPlugin],
    ['UMD build', CjsPlugin]
])('%s', (name, WindowPlugin) => {

    it('installs $window and $document', () => {
        document.title = name
        const localVue = createLocalVue()
        localVue.use(WindowPlugin)
        const wrapper = mount(SampleComponent, {localVue})
        expect(wrapper.vm.$window).toBe(window)
        expect(wrapper.text()).toBe(name)
    })
})
