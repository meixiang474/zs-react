import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
const COLORS = ['red', 'yellow', 'blue', 'green']
class ScrollList extends React.Component {
  constructor(){
    super()
    this.container = React.createRef()
    this.state = {
      messages: []
    }
  }
  addMessage = () => {
    this.setState({
      messages: [`${this.state.messages.length}`, ...this.state.messages]
    })
  }
  componentDidMount(){
    this.$timerID = setInterval(() => {
      this.addMessage()
    }, 1000)
  }
  // 获取dom更新前的快照
  getSnapshotBeforeUpdate(){
    // 获取容器的内容高度
    return this.container.current.scrollHeight
  }
  componentDidUpdate(prevProps, prevState, prevScrollHeight){
    let scrollHeight = this.container.current.scrollHeight
    let newScrollHeight = this.container.current.scrollTop + (scrollHeight - prevScrollHeight)
    this.container.current.scrollTop = newScrollHeight
  }
  componentWillUnmount(){
    clearInterval(this.$timerID)
  }
  render(){
    let style = {
      height: 100,
      width:200,
      border: '1px solid red',
      overflow: 'auto'
    }
    return (
      <div style={style} ref={this.container}>
        {this.state.messages.map((message, index) => (
          <div key={index} style={{backgroundColor: COLORS[index % 4]}}>
            {message}
          </div>
        ))}
      </div>
    )
  }
}
ReactDOM.render(<ScrollList/>, document.getElementById('root'))
