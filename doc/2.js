import React from 'react'
import ReactDOM from 'react-dom'
// JSX其实是一个变量, 可以用在if和for循环里

function greeting(name){
  return (
    <div>Hello {name}</div>
  )
}
let element = greeting('zhufeng')

let names = ['1', '2', '3']
let lis = []
for(let i = 0; i < names.length; i++){
  lis.push(<li key={i}>{names[i]}</li>)
}

let element1 = <ul>{lis}</ul>

ReactDOM.render(element1, document.getElementById('root'))