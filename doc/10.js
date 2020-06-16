import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 属性 父组件传过来的, 自己不能控制也不能改变 
 * 状态 是组件自己内部产生的维护的, 由自己维护, 外界无法访问, 唯一改变状态的方式是setState
 */
class Counter extends React.Component {
  // 也可以在这定义状态
  // state = {
  //   number: 0
  // }
  constructor(props){
    super(props)
    this.state = {
      name: 'zhufeng',
      number: 0
    } // 定义状态的地方
  }
  /**
   * 合成事件 React合成事件
   * 事件代理
   * event是React二次封装的事件对象
   * setState
   * 异步
   * 合并
   * 在进行事件处理时, 会进行批量更新状态
   * 先缓存所有更新, 等事件结束, 再进行统一更新
   */
  /**
   * 在组件类的实例中, this是不是类的实例
   * 一般来说类的方法里的this是undefined
   * 如何让普通方法的this指向指定组件实例
   * 1. 箭头函数
   * 2. 匿名函数
   * 3. bind绑定
   */
  add = (event) => {
    // setState方法的调用还有更新组件的功能
    // this.setState((previousState) => ({number: previousState.number + 1}), () => {
    //   console.log(1, this.state)
    // })
    // this.setState((previousState) => ({number: previousState.number + 1}), () => {
    //   console.log(2, this.state)
    // })
    // this.setState((previousState) => ({number: previousState.number + 1}), () => {
    //   console.log(3, this.state)
    // })
    // this.setState({
    //   number: this.state.number + 1
    // })
    // this.setState({
    //   number: this.state.number + 2
    // })
    // this.setState({
    //   number: this.state.number + 3
    // })
    // setTimeout里调用setState会立刻更新
    setTimeout(() => {
      this.setState({
        number: this.state.number + 5
      }, () => {
        console.log(this.state.number)
      })
      console.log(3)
      this.setState({
        number: this.state.number + 5
      }, () => {
        console.log(this.state.number)
      })
    })
  }

  render(){
    // 当我们调用setState方法时候, 会引起状态的改变和重新刷新
    return (
      <div>
        <p>
          {this.state.name}
        </p>
        <p>
          {this.state.number}
        </p>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

let element = <Counter/>

ReactDOM.render(element, document.getElementById('root'))