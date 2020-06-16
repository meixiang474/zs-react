import React from 'react'
import ReactDOM from 'react-dom'
let element = (
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
)
let spans = [
  <span>1</span>,
  <span>2</span>,
  <span>3</span>
]
// let divs = spans.map(item => <div>{item}</div>)

// 最简单的React.Children.map实现
function map(children, fn){
  return children.map(fn)
}

let divs = React.Children.map(spans, (item, index) => <div key={index}>{item}</div>)
console.log(element)
ReactDOM.render(
  <div>
    {divs}
  </div>
  , document.getElementById('root'))