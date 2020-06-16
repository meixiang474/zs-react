// let state = {}
// let updatteQueue = []
// function setState(newState){
//   updatteQueue.push(newState)
// }

// updatteQueue.forEach(newState => state = newState)

class Component {
  constructor(){
    this.state = {number: 0}
    this.batchUpdate = false
    this.updateQueue = []
    this.callbackQueue = []
    let oldAdd = this.add
    this.add = (...args) => {
      this.batchUpdate = true
      oldAdd.apply(this, args)
      this.flushUpdate()
    }
  }
  setState(partialState, callback){
    if(this.batchUpdate){
      this.updateQueue.push(partialState)
      callback && this.callbackQueue.push(callback)
    }else {
      partialState = typeof partialState === 'function' ? partialState(this.state) : partialState
      this.state = {...this.state, ...partialState}
      callback && callback()
    }
  }
  forceUpdata(){
    // 直接render并且更新
  }
  flushUpdate(){
    // this.updateQueue.forEach(newState => this.state = newState)
    let state = this.state
    for(let i = 0; i < this.updateQueue.length; i++){
      let partialState = typeof this.updateQueue[i] === 'function' ? this.updateQueue[i](state) : this.updateQueue[i]
      state = {...state, ...partialState}
    }
    this.state = state
    this.callbackQueue.forEach(callback => callback())
    this.batchUpdate = false
  }
  add(){
    this.setState((previousState) => ({number: previousState.number + 1}), () => {
      console.log(1, this.state)
    })
    this.setState((previousState) => ({number: previousState.number + 1}), () => {
      console.log(2, this.state)
    })
    this.setState((previousState) => ({number: previousState.number + 1}), () => {
      console.log(3, this.state)
    })
  }
}

let c = new Component()
c.add()
console.log(c.state)