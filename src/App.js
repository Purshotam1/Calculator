import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {
  setValue,setOp,Equal,Clear,setDig
} from './action'

class App extends Component {

  clearData=()=>{
    this.props.dispatch(Clear());
    document.getElementById("input").value="";
  };

  op=(evt)=>{
    this.props.dispatch(setOp(evt.target.value));
    document.getElementById("input").value="";
  };
  op_id=(evt)=>{
    this.props.dispatch(setOp(evt.target.id));
    document.getElementById("input").value="";
  };
  Dig=(evt)=>{
    this.props.dispatch(setDig(parseInt(evt.target.id)));
    document.getElementById("input").value=this.props.redux.temp;
  };
  changeData=(evt)=>{
    this.props.dispatch(setValue(parseInt(evt.target.value)));
  };
  equal=()=>{
    this.props.dispatch(Equal());
    document.getElementById("input").value="";
  };

  render() {

    return (
      <div className="container">
          <table className="calc">
          <tbody>
            <tr className="screen">
              <td colSpan="4"><p className="rtl">{this.props.redux.total}</p></td>
            </tr>
            <tr className="screen">
              <td colSpan="4"><p>{this.props.redux.curr}</p></td>
            </tr>
            <tr className="screen">
              <td colSpan="4">
                <input className="button" id="input" type="text" placeholder={this.props.redux.temp} onChange={this.changeData} autoFocus/>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button className="button" onClick={this.clearData}>clear</button>
              </td>
              <td className="op">
                <button className="button" onClick={this.op_id} id="/">/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button" onClick={this.Dig} id="7">7</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="8">8</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="9">9</button>
              </td>
              <td className="op">
                <button className="button" onClick={this.op_id} id="*">*</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button" onClick={this.Dig} id="4">4</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="5">5</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="6">6</button>
              </td>
              <td className="op">
                <button className="button" onClick={this.op_id} id="-">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="button" onClick={this.Dig} id="1">1</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="2">2</button>
              </td>
              <td>
                <button className="button" onClick={this.Dig} id="3">3</button>
              </td>
              <td className="op">
                <button className="button" onClick={this.op_id} id="+">+</button>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button className="button" onClick={this.Dig} id="0">0</button>
              </td>
              <td className="op_equal">
                <button className="button"  onClick={this.equal}>=</button>
              </td>
            </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    redux:state
  });
}
export default connect(mapStateToProps)(App);
