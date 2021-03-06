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
class OrderPage extends Component{
 
  state = {
    date: '',
    store: '',
    products: []
  }

  addOrder = event => {
    event.preventDefault();
    console.log('in addOrder', this.state)
    this.props.dispatch({type: 'ADD_ORDER', payload: this.state})
    this.setState({
      ...this.state,
      date: '',
      store: '',
      products: [...this.state.products, {id: '', count: ''}],
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
      products: [...this.state.products, {id: parseInt(event.target.name), count: parseInt(event.target.value)}]
  })
}

handleInputStore = event => {
  console.log('handleInputStore', event.target.value)
  this.setState({
      store: event.target.value
  })
}

handleInputDate = event => {
  console.log('handleInputStore', event.target.value)
  this.setState({
      date: event.target.value
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
              onChange={this.handleInputDate} value={this.state.date}/>
        </div>
        <form onSubmit={this.addOrder}>
          <table style={{width: 325, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th><th>On Hand</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reduxState.products.map(product => 
                <tr key={product.id}>
                  <td value={product.id}>{product.description}</td>
                  <td><input onBlur={this.handleInput} name={product.id} placeholder="On Hand"></input></td>
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
export default connect(mapStateToProps)(OrderPage);