import React from 'react'
import ReactDOM from 'react-dom'
localStorage.setItem('username', 'tom')
function loadFromLocal(OldComponent, name) {
  return class extends React.Component {
    state = {
      value: null
    }
    componentDidMount(){
      let value = localStorage.getItem(name)
      this.setState({value})
    }
    render(){
      return <OldComponent value={this.state.value} {...this.props}/>
    }
  }
}
// 接受一个属性里面放着英文名, 通过调用服务端接口得到此英文名对应的中文名, 然后再赋值给value
function loadFromAjax(OldComponent){
  return class extends React.Component {
    state = {value: null}
    componentDidMount(){
      fetch('/translate.json').then(response => response.json()).then(data => {
        this.setState({
          value: data[this.props.value]
        })
      })
    }
    render(){
      return <OldComponent value={this.state.value}/>
    }
  }
}
const UserName = (props) => {
  return <input defaultValue={props.value}/>
}

let AjaxUserName = loadFromAjax(UserName)
let LocalUserName = loadFromLocal(AjaxUserName, 'username')
ReactDOM.render(
  <div>
    <LocalUserName/>
  </div>
  , document.getElementById('root'))


