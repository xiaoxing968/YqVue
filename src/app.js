import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import IconGroup from './button-group'

Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-button-group", IconGroup)

new Vue({
    el:"#app",
    data:{
        loading: false,
        loading1:false,
        loading2:false,
    }
})

import chai from 'chai'

const expect = chai.expect

// 单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount('#test2')
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const  div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:"setting",
            iconPosition:"right"
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const wButton = new Constructor({
        propsData:{
            icon:"setting",
        }
    })
    wButton.$mount()
    wButton.$on('click',function (){
        console.log(1)
    })
    let button = wButton.$el
    button.click()
}