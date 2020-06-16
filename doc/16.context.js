import React, {useState} from 'react'
import ReactDOM from 'react-dom'
let ThemeContext = React.createContext()
// 简单原理
function createContext(initialValue){
  let contextValue = initialValue
  class Provider extends React.Component {
    constructor(props){
      super(props)
      contextValue = props.value
    }
    static getDerivedStateFromProps(nextProps){
      contextValue = nextProps.value
      return {}
    }
    render(){
      return this.props.children
    }
  }
  class Consumer {
    render(){
      return this.props.children(contextValue)
    }
  }
  return {
    Provider,
    Consumer
  }
}

function Title(props) {
  return (
   <ThemeContext.Consumer>
    {(value)=>(
      <div style={{border: `1px solid ${value.color}`}}>
      Title
    </div>
    )}
   </ThemeContext.Consumer>
    
  )
}
class Header extends React.Component {
  static contextType = ThemeContext
  constructor(props, context){
    super(props)
    console.log(context)
  }
  render(){
    return (
      <div style={{border: `1px solid ${this.context.color}`}}>
        Header
        <Title/>
      </div>
    )
  }
}
class Content extends React.Component {
  static contextType = ThemeContext
  render(){
    return(
      <div style={{border: '1px solid red'}}>
        Content
        <button onClick={() => this.context.changeColor('red')}>变红</button>
        <button onClick={() => this.context.changeColor('green')}>变绿</button>
      </div>
    )
  }
}
class Main extends React.Component {
  render(){
    return (
      <div style={{border: '1px solid red'}}>
        Main
        <Content/>
      </div>
    )
  }
}
class Panel extends React.Component {
  state = {
    color: 'green'
  }
  changeColor = (color) => {
    this.setState({color})
  }
  render(){
    return (
     <ThemeContext.Provider value={{color: this.state.color, changeColor: this.changeColor}}>
        <div style={{border: `1px solid ${this.state.color}`, width: 100}}>
        Panel
        <Header/>
        <Main/>
      </div>
     </ThemeContext.Provider>
    )
  }
}
ReactDOM.render(<Panel/>, document.getElementById('root'))
