import React,{Component} from 'react';

export default class Counter extends Component{

  MyRef = React.createRef()


  add =()=>{
    let number  = this.MyRef.current.value
    this.props.add(number)
  }

  sub =()=>{
    let number  = this.MyRef.current.value
    this.props.sub(number)
  }
  even=()=>{
    let number  = this.MyRef.current.value
    this.props.even(number)
  }
  asyncAdd=()=>{
    let number  = this.MyRef.current.value
    this.props.asyncAddAction(number,1000)
  }

      render () {
        let count = this.props.count
        console.log("count",count)
        return(
          <div>
            <h1>当前数字为{count}</h1>
            <select name="number" id="number" ref = {this.MyRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={this.sub}>-</button>
            <button onClick={this.add}>+</button>
            <button onClick={this.even}>当为偶数时加一</button>
            <button onClick={this.asyncAdd}>Async时加一</button>
          </div>
        )
      }
}