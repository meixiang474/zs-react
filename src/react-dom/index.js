/**
 * 
 * @param {*} element React节点, 可以是React元素, 也可以是数字字符串 
 * @param {*} parent 父容器 
 */
function render(node, parent) {
  if(typeof node === 'string'){
    return parent.appendChild(document.createTextNode(node))
  }
  let type, props. ref
  type = node.type
  props = node.props
  ref = props.ref
  if(type.isReactComponent){
    let element = new type(props).render()
    type = element.type
    props = element.props
    if(typeof element.type === 'function'){
      return render(element, parent)
    }
  }else if(typeof type === 'function'){
    let element = type(props)
    type = element.type
    props = element.props
    if(typeof element.type === 'function'){
      return render(element, parent)
    }
  }
  
  let domElement = document.createElement(type)
  ref.current = domElement
  // 迭代循环属性对象中的所有属性
  for(let propName in props){
    if(propName === 'children'){
      let children = props.children // 可能是一个对象 数组
      if(!Array.isArray(children)){ // 如果不是数组转成数组
        children = [children]
      }
      children.forEach(child => render(child, domElement))
    }else if(propName === 'className'){
      domElement.className = props.className
    } else if(propName === 'style'){
      let styleObject = props.style
      for(let attr in styleObject){
        domElement.style[attr] = styleObject[attr]
      }
    }else{
      domElement.setAttribute(propName, props[propName])
    }
  }
  parent.appendChild(domElement)
}

export default {
  render
}