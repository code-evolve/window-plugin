/*
 * Copyright (c) 2018-present Steven Spungin
 * SPDX-License-Identifier: MIT
 */
import {expect} from 'chai'
import {createLocalVue, shallow} from '@vue/test-utils'
import SampleComponent from './components/SampleComponent'
import WindowPlugin from "../../dist/index";

describe('plugin installed', () => {

    it('has window', () => {
        const localVue = createLocalVue();
        localVue.use(WindowPlugin)
        const wrapper = shallow(SampleComponent, {localVue})
        expect(wrapper.vm.$window.console).to.exist
    })

    it('has document', () => {
        const localVue = createLocalVue();
        localVue.use(WindowPlugin) 
        const wrapper = shallow(SampleComponent, {localVue})
        expect(wrapper.vm.$document.title).to.exist;
    })
})

describe('plugin not installed', () => {

    it('not has window', () => {
        const localVue = createLocalVue();
        const wrapper = shallow(SampleComponent, {localVue})
        expect(wrapper.vm.$window).to.not.exist;
    })

    it('not has document', () => {
        const localVue = createLocalVue();
        const wrapper = shallow(SampleComponent, {localVue})
        expect(wrapper.vm.$document).to.not.exist;
    })
})
