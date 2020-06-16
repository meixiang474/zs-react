import React from 'react'
import ReactDOM from 'react-dom'
class MouseTracker extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render(){
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}
// 高阶组件
function withMouseTracker(OldComponent){
  return props => {
    return <MouseTracker render={props => <OldComponent {...props}/>}/>
  }
}
let App = props => (
  <>
    <h1>请你移动鼠标</h1>
    <p>当前鼠标的位置 x={props.x} y={props.y}</p>
  </>
)
let WithMouseTrackerApp = withMouseTracker(App)
ReactDOM.render(
  <WithMouseTrackerApp/>
  , document.getElementById('root'))


