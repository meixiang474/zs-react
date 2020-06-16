import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 1. 如何定义组件
 * 定义组件有两种方式, 一种是函数式, 一种是类的方式
 * 返回的是一个React顶级元素
 * React是如何定义的, 如何渲染的
 * 1. 把所有属性组合成一个对象
 * 2. 把属性对象作为参数传递给函数组件
 * 3. 函数组件返回一个React元素
 * 4. 然后由ReactDOM.render方法将虚拟dom转换为真实元素
 */
function Welcome1(props){
  //JSX表达式只能有一个父元素
  return (
    <h1>
      hello{props.name}
      <span>world</span>
    </h1>
  )
}
/**
 * 1. 收集props对象
 * 2. 把props对象传递给Welcome类的构造函数 new Welcome(props)
 * 3. 调用实例上的render方法进行渲染, 获得返回的React元素
 * 4. 然后把此元素渲染到页面上
 */
class Welcome extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <h1>
        hello{this.props.name}
        <span>world</span>
      </h1>
    )
  }
}

//第一个参数是元素类型, 可以是字符串也可以是类, 也可以是函数
// let element = React.createElement(Welcome, {name: 'zhufeng'})

ReactDOM.render(<Welcome name="zhufeng"/>, document.getElementById('root'))