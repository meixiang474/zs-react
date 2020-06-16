import React, {useState} from 'react'
import ReactDOM from 'react-dom'
/**
 * useState
 * 1. 类有实例, 而且类不能轻易销毁, 而且类的上属性很多, 管理起来也麻烦
 * 2, 多用函数组件, 而少用类组件
 * 3. useState就是在函数里使用状态
 */
let count
function useState(initialState){
  count = initialState
  function setCount(newCount){
    count = newCount
  }
  return [count, setCount]
}

function Counter() {
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>
        {}
      </p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

ReactDOM.render(<Counter/>, document.getElementById('root'))