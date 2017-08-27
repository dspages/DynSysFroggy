import React from 'react';
var algebra = require("algebra.js");
import {SCALE, OFFSET, line, getVector} from "./util.js";

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {dxdt: "y*y-x", dydt: "x-y", length: 0.02};
    this.updateGraph = this.updateGraph.bind(this);
    this.changedxdt = this.changedxdt.bind(this);
    this.changedydt = this.changedydt.bind(this);
    this.changeLength = this.changeLength.bind(this);
    window.setTimeout(this.updateGraph,0);
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  updateGraph(){
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 620;
    canvasEl.height = 620;
    let ctx=canvasEl.getContext("2d");
    let DT=this.state.length;
    let arr=[];
    for (let i = -6; i <= 6; i++) {
      arr.push([]);
      for (let j = -6; j <= 6; j++) {
        let vector=getVector(i,j,this.state.dxdt,this.state.dydt);
        arr[i+6][j+6]=vector;
        line([i,j],
        [(i)+(parseFloat(vector[0])*DT),(j)+(parseFloat(vector[1]))*DT],ctx);
      }
    }
  }

  changedxdt(event){
    this.setState({dxdt: event.target.value});
    window.setTimeout(this.updateGraph,0);
  }

  changedydt(event){
    this.setState({dydt: event.target.value});
    window.setTimeout(this.updateGraph,0);
  }

  changeLength(event){
    this.setState({length: event.target.value});
    window.setTimeout(this.updateGraph,0);
  }

  render(){
    return (
      <div>
        DXDT: <input value={this.state.dxdt} onChange={this.changedxdt}></input>
        DYDT: <input value={this.state.dydt} onChange={this.changedydt}></input>
        Length: <input value={this.state.length} onChange={this.changeLength}></input>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}

export default Display;
