import React from 'react'
import ReactDOM from 'react-dom'
// JSX
let style = {border: '1px solid red'}
let element1 = <h1 
  style={style}
  id="hello" 
  className="title">hello</h1>
// 在babel转译的时候会把element这种形式转成element2这种形式
// 创建React元素
let element2 = React.createElement("h1", null, 'hello')
console.log(element2)
// element2={type: 'h1', props: {children: 'hello'}}
ReactDOM.render(element1, document.getElementById('root'))
/**
 * 1. jsx只是一个语法糖, 最终会被编译成React.createElement
 * 2. ReactElement是构建React应用的最小单位
 * 3. React元素是一个对象, 用来描述界面上的内容
 */