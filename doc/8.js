import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
/**
 * 属性校验
 * 1. 为什么属性校验
 * 
 */
class Person extends React.Component {
  static defaultProps = {
    gender: 'male'
  }
  static propTypes = {
    // age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['male', 'female']).isRequired,
    hobby: PropTypes.arrayOf(PropTypes.string),
    position: PropTypes.shape({x: PropTypes.number, y: PropTypes.number}),
    age: function(props, propName, componentName){
      console.log(props, propName, componentName)
      if(props.age < 18){
        throw new Error('你还未成年')
      }
    }
  }
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>age</th>
            <th>gender</th>
            <th>hobby</th>
            <th>position</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {this.props.age}
            </td>
            <td>
              {this.props.gender}
            </td>
            <td>
              {this.props.gender}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}


 let personProps = {
   age: 80,
   gender: 'male',
   hobby: ['basketball', 'football'],
   position: {x: 10, y: 10},
   friends: [{name: 'zhangsan', age: 10}, {name: 'lisi', age: -20}]
 }

ReactDOM.render(<Person {...personProps}/>, document.getElementById('root'))