const hasSymbol = typeof Symbol === 'function' && Symbol.for
const REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7

class Component {
  constructor(props){
    this.props = props
  }
  static isReactComponent = true
}

function createElement(type, config, children) {
  let props = {}
  for(let key in config){
    props[key] = config[key]
  }
  const childrenLength = arguments.length - 2
  if(childrenLength === 1){ // 如果说只有一个儿子, 那么props.children就是一个ReactNode
    props.children = children
  }else if(childrenLength > 1){
    // 如果儿子的数量大于1个的话, 就把所有的儿子放到一个数组里
    props.children = Array.prototype.slice.call(arguments, 2)
  }
  // 表示这是一个React元素
  return {$$typeof: REACT_ELEMENT_TYPE, type, props}
}

export default {
  createElement,
  Component
}