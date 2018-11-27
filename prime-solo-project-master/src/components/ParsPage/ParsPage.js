import React, {Component} from 'react';
import { connect } from 'react-redux';

class ParsPage extends Component{

  componentDidMount(){
    this.getProducts();
    this.getStores();
  }

  getStores(){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
  }

  getProducts(){
    console.log('in getProducts');
    this.props.dispatch({type: 'GET_PRODUCTS'})
  }

  handleInputStore = event => {
    console.log('handleInputStore', event.target.value)
    this.props.dispatch({type: 'GET_PARS', payload: event.target.value})
    this.setState({
        store: event.target.value
    })
  }

  handleEdit(event){
    console.log()
  }

  // getStorePars = event => {
  //   console.log('in getStorePars', event.target.value)
  //   this.props.dispatch({type: 'GET_PARS', payload: event.target.value})
  //   this.setState({
  //     ...this.state
  //   })
  // }

  // addPars= event => {
  //   event.preventDefault();
  //   console.log('in addPars', this.state)
  //   this.props.dispatch({type: 'ADD_PARS', payload: this.state})
  //   this.setState({
  //     ...this.state,
  //     store: '',
  //     products: [],
  //   })
  //   console.log('sent to POST: ', this.state)
  //   alert("Pars submitted!")
  // }

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
                <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

{/* <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td>
                  <td><input onChange={this.handleInput} name={product.id} placeholder="Set Par"></input></td> */}


const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParsPage);