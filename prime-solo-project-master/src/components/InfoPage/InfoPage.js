import React, {Component} from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  handleClickDough = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_DOUGH'})
  }

  handleClickCheese = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_CHEESE'})
  }

  handleClickMeat = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_MEAT'})
  }

  handleClickCookie = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_COOKIE'})
  }

  handleClickMix = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_MIX'})
  }


  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <form>
        <div style={{width: 700, margin: 'auto'}}>
          <button onClick={this.handleClickDough} 
            value="dough" style={{width: 200, height: 50, fontSize: 15}}>Get Dough Order</button><br/>
          <button onClick={this.handleClickCheese} 
            value="cheese" style={{width: 200, height: 50, fontSize: 15}}>Get Cream Cheese Order</button><br/>
          <button onClick={this.handleClickMeat} 
            value="meat" style={{width: 200, height: 50, fontSize: 15}}>Get Meats Order</button><br/>
          <button onClick={this.handleClickCookie} 
            value="cookie" style={{width: 200, height: 50, fontSize: 15}}>Get Cookies Order</button><br/>
          <button onClick={this.handleClickMix} 
            value="mix" style={{width: 200, height: 50, fontSize: 15}}>Get Mix Order</button><br/>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);