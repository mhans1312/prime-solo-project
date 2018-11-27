import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class ParsPage extends Component{

  componentDidMount(){
    this.getStores();
  }

  getStores(){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
  }

  handleInputStore = event => {
    console.log('handleInputStore', event.target.value)
    this.props.dispatch({type: 'GET_PARS', payload: event.target.value})
    this.setState({
        store: event.target.value
    })
    console.log('state?', this.state)
  }

  handleEdit = (event) => {
    this.props.dispatch({type: 'EDIT_PARS'})
    console.log()
    
  }

  render(){
    return(
      <div>
        <div>
        <select onChange={this.handleInputStore}>
            <option name="store" value="" selected disabled hidden>Select a Store</option>
              {this.props.reduxState.stores.map(store =>
                <option key={store.id} value={store.id}>{store.name}</option>)}
            </select>
        </div>
        <form onSubmit={this.addOrder}>
          <table style={{width: 500, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th>
                <th>Mon Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Tues Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Wed Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Thur Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Fri Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Sat Par<button onClick={this.handleEdit}>Edit</button></th>
                <th>Sun Par<button onClick={this.handleEdit}>Edit</button></th>
              </tr>
            </thead>
            <tbody style={{width: 500, margin: 'auto'}}>
              {this.props.reduxState.pars.map(par => 
                <tr key={par.id}>
                  <td value={par.id}>{par.description}</td>
                  <td>{par.monday_par}</td>
                  <td>{par.tuesday_par}</td>
                  <td>{par.wednesday_par}</td>
                  <td>{par.thursday_par}</td>
                  <td>{par.friday_par}</td>
                  <td>{par.saturday_par}</td>
                  <td>{par.sunday_par}</td>
                </tr>)}
                </tbody>
          </table>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParsPage);