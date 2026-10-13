/*
 * Copyright (c) 2018-present Steven Spungin
 * SPDX-License-Identifier: MIT
 */
import {describe, it, expect} from 'vitest'
import {createLocalVue, mount} from '@vue/test-utils'
import WindowPlugin from '../../src/main'

const SampleComponent = {
    name: 'SampleComponent',
    render(h) {
        return h('div', 'Sample')
    }
}

describe('plugin installed', () => {

    it('has window', () => {
        const localVue = createLocalVue()
        localVue.use(WindowPlugin)
        const wrapper = mount(SampleComponent, {localVue})
        expect(wrapper.vm.$window).toBe(window)
        expect(wrapper.vm.$window.console).toBeDefined()
    })

    it('has document', () => {
        const localVue = createLocalVue()
        localVue.use(WindowPlugin)
        const wrapper = mount(SampleComponent, {localVue})
        expect(wrapper.vm.$document).toBe(document)
    })

    it('is available during the first render', () => {
        document.title = 'First render'
        const localVue = createLocalVue()
        localVue.use(WindowPlugin)
        const TitleComponent = {
            render(h) {
                return h('h1', this.$document.title)
            }
        }
        const wrapper = mount(TitleComponent, {localVue})
        expect(wrapper.text()).toBe('First render')
    })

    it('follows the document that owns the element', () => {
        const otherDocument = document.implementation.createHTMLDocument('Other')
        const localVue = createLocalVue()
        localVue.use(WindowPlugin)
        const wrapper = mount(SampleComponent, {localVue})
        const el = otherDocument.createElement('div')
        Object.defineProperty(wrapper.vm, '$el', {value: el})
        expect(wrapper.vm.$document).toBe(otherDocument)
    })
})

describe('plugin not installed', () => {

    it('not has window', () => {
        const localVue = createLocalVue()
        const wrapper = mount(SampleComponent, {localVue})
        expect(wrapper.vm.$window).toBeUndefined()
    })

    it('not has document', () => {
        const localVue = createLocalVue()
        const wrapper = mount(SampleComponent, {localVue})
        expect(wrapper.vm.$document).toBeUndefined()
    })
})
