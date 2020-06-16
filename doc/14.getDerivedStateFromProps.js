import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
/**
 * 新声明周期
 */
class Counter extends React.Component {
  static defaultProps = { // 0. 设置默认属性
    name: 'zhufeng'
  }
  constructor(props){
    super(props)
    this.state = {count: 0} // 1. 执行构造函数, 设置初始状态
    console.log('1. 执行构造函数, 设置初始状态')
  }
  componentWillMount(){
    console.log('2.组件将要挂载')
  }
  handleClick = event => {
    this.setState({count: this.state.count + 1})
  }
  // 询问组件是否需要更新
  shouldComponentUpdate(nextProps, nextState){
    console.log('5.shouldComponentUpdate 询问组件是否需要更新')
    // return nextState.count % 3 === 0
    return true
  }
  componentWillUpdate(){
    console.log('6.componentWillComponent组件将要更新')
  }
  componentDidUpdate(){
    console.log('7.componentDidUpdate组件的最新状态已经同步到界面中了')
  }
  // render是要返回虚拟dom
  render(){
    console.log('3.render确定要显示的虚拟dom是什么')
    return (
      <div>
        <p>
          {this.state.count}
        </p>
        <button onClick={this.handleClick}>+</button>
        <hr/>
        {this.state.count < 3 && <ChildCounter count={this.state.count}/>}
      </div>
    )
  }
  // 当此虚拟dom已经挂载到真实dom中时执行
  componentDidMount(){
    console.log('4.componentDidMount')
  }
}
class ChildCounter extends React.Component {
  state = {
    name: 'ChildCounter',
    count: 0
  }
  // componentWillReceiveProps(newProps){
  //   console.log('CHildCounter', newProps)
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('CHildCounter 询问组件是否需要更新')
    // return nextProps.count % 6 === 0
    return true
  }
  // componentWillUpdate(){
  //   console.log('CHildCounter组件将要更新')
  // }
  componentDidUpdate(){
    console.log('CHildCounter组件的最新状态已经同步到界面中了')
  }
  componentWillUnmount(){
    console.log('ChildCounter组件将要销毁')
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.count % 2 === 0){
      return {
        count: nextProps.count * 2
      }
    }else {
      return {
        count:nextProps.count * 3
      }
    }
  }
  render(){
    console.log('ChildCounter render')
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}
ReactDOM.render(<Counter/>, document.getElementById('root'))
