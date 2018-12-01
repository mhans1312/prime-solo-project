import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  state = {
    date: []
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'GET_COMM', payload: this.state.date})
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

  // handleInputStore = event => {
    
  //   this.props.dispatch({type: 'GET_COMM', payload: event.target.value})
  //   this.setState({
  //       ...this.state.store, store: event.target.value
  //   })
  // }

  handleInputDate = event => {
    console.log('handleInputStore', event.target.value)
    // this.props.dispatch({type: 'GET_COMM', payload: event.target.value})
    this.setState({
        date: event.target.value
    })
  }


  render(){
    return(
      <div>
        {/* <select onChange={this.handleInputStore}>
            <option name="store" value="" selected disabled hidden>Select a Store</option>
              {this.props.reduxState.stores.map(store =>
                <option key={store.id} value={store.id}>{store.name}</option>)}
            </select> */}
            <div style={{width: 700, margin: 'auto'}}>
            <input id="date" label="date" type="date" placeholder="date" name="date" 
              onChange={this.handleInputDate} value={this.state.date}/>
              
              <Button variant="contained" color="default" onClick={this.handleClick} 
            value="dough" style={{width: 100, height: 40, margin: 10, fontSize: 12}}>Get Order</Button><br/>
            </div>

            {/* {JSON.stringify(this.props.reduxState.comm)} */}
            <form>
          <table style={{width: 700, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th>
                <th>Downtown<br/>
                </th>
                <th>Meridian<br/>
                </th>
                <th>Chinden<br/>
                </th>
                <th>State<br/>
                </th>
              </tr>
            </thead>
            <tbody style={{width: 700}}>
              {this.props.reduxState.comm.map(comm => 
                <tr key={comm.id}>
                  <td>{comm.description}</td>
                  <td>{comm.quantity}</td>
                  <td>{comm.quantity}</td>
                  <td>{comm.quantity}</td>
                  <td>{comm.quantity}</td>
                </tr>)}
                </tbody>
          </table>
        </form>
        
        {/* <div style={{width: 700, margin: 'auto'}}>
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
        </div> */}
        
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);