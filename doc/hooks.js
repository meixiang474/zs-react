import React, {useState} from 'react'
import ReactDOM from 'react-dom'
/**
 * 当要渲染的时候, 会去执行这个函数, 然后拿到返回的React元素进行渲染
 *  
 */
function Counter(props){
  let [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

ReactDOM.render(<Counter/>, document.getElementById('root'))