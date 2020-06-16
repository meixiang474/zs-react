function render(node, parent) {
  if(typeof node === 'string'){
    return parent.appendChild(document.createTextNode(node))
  }
  let type, props, ref
  type = node.type
  props = node.props
  ref = props.ref
  if(type.isReactComponent){
    let element = new type(props).render()
    type = element.type
    props = element.props
    if(typeof type === 'function'){
      return render(element, parent)
    }
  }else if(typeof type === 'function'){
    let element = type(props)
    type = element.type
    props = element.props
    if(typeof type === 'function'){
      render(element, parent)
    }
  }
  let domElement = document.createElement(type)
  ref.current = domElement
  for(let propName in props){
    if(propName === 'children'){
      let children = props['children']
      if(!Array.isArray(children)){
        children = [children]
      }
      children.forEach(child => render(child, domElement))
    }else if(propName === 'className'){
      domElement.className = props['className']
    }else if(propName === 'style'){
      for(let attr in props[propName]){
        domElement.style[attr] = props[propName][attr]
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