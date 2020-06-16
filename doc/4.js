import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 元素的更新
 * 默认情况下React是不可变的, 如果说一个元素创建了, 我们不会去修改它
 * 如果界面需修改, 我门需要创建一个新的元素
 */
function tick(){

}
setInterval(() => {
  let element = <div>{new Date().toLocaleString()}</div>
  ReactDOM.render(
    element
    , document.getElementById('root'))
}, 1000)