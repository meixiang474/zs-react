class Component {
  constructor(){
    this.state = {}
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
  setState(partialUpdate, callback){
    if(this.batchUpdate){
      this.updateQueue.push(partialUpdate)
      this.callbackQueue.push(callback)
    }else{
      partialUpdate = typeof partialUpdate === 'function' ? partialUpdate(this.state) : partialUpdate
      this.state = {...this.state, ...partialUpdate}
      callback && callback()
    }
  }
  flushUpdate(){
    let state = this.state
    for(let i = 0; i < this.updateQueue.length; i++){
      let partialUpdate = typeof this.updateQueue[i] === 'function' ? this.updateQueue[i](state) : this.updateQueue[i]
      state = {...state, ...partialUpdate}
    }
    this.state = state
    this.callbackQueue.forEach(callback => callback())
    this.batchUpdate = false
  }
}