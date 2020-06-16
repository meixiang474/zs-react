import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 复合组件
 * 如何划分组件的维度
 * 什么时候需要拆分组件
 * 1. 组件已经太复杂了, 无法管理
 * 2. 组件需要被复用
 */

class PanelHead extends React.Component {
  render(){
    return (
      <div className="panel-heading" style={{border: `1px solid ${this.props.color}`}}>
        我是面板的头部
      </div>
    )
  }
}

class PanelBody extends React.Component {
  render(){
    return (
      <div className="panel-body" style={{border: `1px solid ${this.props.color}`}}>
        我是面板的主体
      </div>
    )
  }
}

class PanelFooter extends React.Component {
  render(){
    return (
      <div className="panel-footer" style={{border: `1px solid ${this.props.color}`}}>
        我是面板的尾部
      </div>
    )
  }
}

class Panel extends React.Component {
  render(){
    return (
      <div className="panel panel-default" style={{border: '1px solid red'}}>
       <PanelHead color="red"/>
       <PanelBody color="red"/>
       <PanelFooter color="red"/>
      </div>
    )
  }
}

ReactDOM.render(<Panel name="zhufeng"/>, document.getElementById('root'))