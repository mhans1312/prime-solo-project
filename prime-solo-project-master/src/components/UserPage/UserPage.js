import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//   </div>
// );

// // Instead of taking everything from state, we just want the user info.
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({user}) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });
class UserPage extends Component{
 
  state = {
    date: '',
    store: '',

  }

  addOrder = event => {
    event.preventDefault();
    console.log('in addOrder', this.state)
    this.props.dispatch({type: 'ADD_ORDER', payload: this.state})
    this.setState({
      ...this.state,
      date: '',
      store: ''
    })
    console.log('sent to POST: ', this.state)
    alert("Order submitted!")
}

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

handleInput = event => {
  console.log('handleInput', event.target.name)
  this.setState({
    ...this.state,
      [event.target.name]: event.target.value
  })
}

handleInputStore = event => {
  console.log('handleInputStore', event.target.value)
  this.setState({
      store: event.target.value
  })
}

  render(){
    return(
      <div>
        <div>
          <select onChange={this.handleInputStore}>
            <option name="store" value="" selected disabled hidden>Select a Store</option>
              {this.props.reduxState.stores.map(store =>
                <option key={store.id} value={store.id}>{store.name}</option>)}
            </select><br/>
            <input id="date" label="date" type="date" placeholder="date" name="date" 
              onChange={this.handleInput} value={this.state.date}/>
        </div>
        <form onSubmit={this.addOrder}>
          <table style={{width: 325, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th><th>On Hand</th><th>Par</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reduxState.products.map(product => 
                <tr>
                  <td key={product.uniqueId} value={product.uniqueId}>{product.description}</td>
                  <td><input onChange={this.handleInput} name={product.description} placeholder="On Hand"></input></td>
                </tr>)}
                </tbody>
          </table>
                <button type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);