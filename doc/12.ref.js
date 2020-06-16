import React, {useState} from 'react'
import ReactDOM from 'react-dom'
/**
 * ref
 * this.refs = {
 * num1: num1对应的真实dom
 * num2: num2对应的真实dom
 * result: result对应的真实dom
 * }
 * ref让你可以引用虚拟dom的真实dom
 * 1. ref=字符串 将被废弃
 * 2. ref=函数 不推荐
 * 3. ref=React.createRef() 推荐
 */
class Calculator1 extends React.Component {
  add = () => {
    let num1 = parseInt(this.refs.num1.value)
    let num2 = parseInt(this.refs.num2.value)
    let result = num1 + num2
    this.refs.result.value = result
  }
  render(){
    return (
      <div>
        <input ref="num1"/> + <input ref="num2"/><button onClick={this.add}>=</button><input ref="result"/>
      </div>
    )
  }
}

class Calculator2 extends React.Component {
  add = () => {
    let num1 = parseInt(this.num1.value)
    let num2 = parseInt(this.num2.value)
    let result = num1 + num2
    this.result.value = result
  }
  /**
   * ref值是一个函数的话, 那么此函数会在虚拟dom转成dom插入页面中之后执行, 参数救赎真实dom
   */
  render(){
    return (
      <div>
        <input ref={instance => this.num1 = instance}/> + <input ref={instance => this.num2 = instance}/><button onClick={this.add}>=</button><input ref={instance => this.result = instance}/>
      </div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.num1 = React.createRef() // {current: null}
    this.num2 = React.createRef()
    this.result = React.createRef()
  }
  add = () => {
    let num1 = parseInt(this.num1.current.value)
    let num2 = parseInt(this.num2.current.value)
    let result = num1 + num2
    this.result.current.value = result
  }
  /**
   * ref值是一个函数的话, 那么此函数会在虚拟dom转成dom插入页面中之后执行, 参数救赎真实dom
   */
  render(){
    return (
      <div>
        <input ref={this.num1}/> + <input ref={ this.num2}/><button onClick={this.add}>=</button><input ref={this.result}/>
      </div>
    )
  }
}

/**
 * 如何引用一个类组件, 获取一个类组件的实例
 */
class Username1 extends React.Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef()
  }
  render(){
    return (
      <input ref={this.inputRef}/>
    )
  }
}
/**
 * 如何给函数组件添加Ref
 * 
 */
function Username(props, ref){
  return <input ref={ref}/>
}
function forwardRef(functionComponent) {
  return props => functionComponent(props, props.ref2)
}
const ForwardUsername = forwardRef(Username)

class Form extends React.Component {
  constructor(props){
    super(props)
    this.username = React.createRef()
  }
  getFocus = (event) => {
    this.username.current.focus()
  }
  // this.username就是Username组件的实例
  render(){
    return (
      <>
        <ForwardUsername ref2={this.username}/>
        <button onClick={this.getFocus}>让用户名获得焦点</button>
      </>
    )
  }
}



ReactDOM.render(<Form/>, document.getElementById('root'))