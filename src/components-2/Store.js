import { runInAction, observable, action } from 'mobx'

export default class AppStore {
  @observable  count

  constructor () {
    this.count = 0
  }


 @action add =()=>{
    console.log("addddd")
    runInAction(()=>{
      this.count++
    })
  }

  @action sub =()=>{
    runInAction(()=>{
      this.count--
    })

  }
  @action even=()=>{
    runInAction(()=>{
      this.count++
    })
  }
  @action asyncAdd=()=>{
    runInAction(()=>{
      this.count++
    })

  }
}