import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
      <div>
        
        <div style={{width: 700, margin: 'auto'}}>
          <Button variant="contained" color="default" onClick={this.handleClickDough} 
            value="dough" style={{width: 200, height: 50, margin: 10, fontSize: 15}}>Get Dough Order</Button><br/>
          <Button variant="contained" color="default" onClick={this.handleClickCheese} 
            value="cheese" style={{width: 200, height: 50, margin: 10, fontSize: 15}}>Get Cream Cheese Order</Button><br/>
          <Button variant="contained" color="default" onClick={this.handleClickMeat} 
            value="meat" style={{width: 200, height: 50, margin: 10, fontSize: 15}}>Get Meats Order</Button><br/>
          <Button variant="contained" color="default" onClick={this.handleClickCookie} 
            value="cookie" style={{width: 200, height: 50, margin: 10, fontSize: 15}}>Get Cookies Order</Button><br/>
          <Button variant="contained" color="default" onClick={this.handleClickMix} 
            value="mix" style={{width: 200, height: 50, margin: 10, fontSize: 15}}>Get Mix Order</Button><br/>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);