import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 高阶组件是为了解决逻辑复用
 * 
 */

function withLogger(OldComponent){
  return class extends React.Component {
    componentWillMount(){
      this.start = Date.now()
    }
    componentDidMount(){
      console.log(Date.now() - this.start)
    }
    render(){
      return <OldComponent {...this.props}/>
    }
  }
}
class App extends React.Component {
  
  render(){
    return (
      <div>
        App
      </div>
    )
  }
}
let LoggerApp = withLogger(App)
ReactDOM.render(<LoggerApp/>, document.getElementById('root'))


