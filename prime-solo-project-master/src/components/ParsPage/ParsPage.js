import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class ParsPage extends Component{

  state = {
    store: '',
    mode:'view',
    products: []
  }

  componentDidMount(){
    this.getStores();
  }

  handleChange = (event) => {
    console.log('handleChange')
    this.setState({
      ...this.state,
      products: [...this.state.products, {id: (this.props.reduxState.product_id), count: parseInt(event.target.value)}]
  })
}

  handleSave = () => {
    this.props.dispatch({type: 'EDIT_PARS', payload: this.state});
    this.setState({...this.state, text: this.state.inputText, mode: 'view'});
  }

  handleEdit = () => {
    this.setState({...this.state, mode: 'edit'});
  }

  getStores(){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
  }

  handleInputStore = event => {
    console.log('handleInputStore', event.target.value)
    this.props.dispatch({type: 'GET_PARS', payload: event.target.value})
    this.setState({
        ...this.state.store, store: event.target.value
    })
    console.log('state?', this.state)
  }

  renderInputField(){
    if(this.state.mode === 'view'){
    return<div></div>;
    }else{   
      return (
        <p>
          <input onChange={this.handleChange} value={this.state.inputText}/>
        </p>
      )
    }
  }

  renderButton(){
    if(this.state.mode === 'view'){
      return(
        <button onClick={this.handleEdit}>
        Edit Pars
        </button>
      );
    }else{
      return (
        <button onClick={this.handleSave}>
        Save
        </button>
      )
    }
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
        {/* {JSON.stringify(this.props.reduxState.pars)} */}
        <form onSubmit={this.addOrder}>
          <table style={{width: 700, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th>
                <th>Monday Par<br/>
                {this.renderButton()}</th>
                <th>Tuesday Par<br/>
                {this.renderButton()}</th>
                <th>Wednesday Par<br/>
                {this.renderButton()}</th>
                <th>Thursday Par<br/>
                {this.renderButton()}</th>
                <th>Friday Par<br/>
                {this.renderButton()}</th>
                <th>Saturday Par<br/>
                {this.renderButton()}</th>
                <th>Sunday Par<br/>
                {this.renderButton()}</th>
              </tr>
            </thead>
            <tbody style={{width: 500, margin: 'auto'}}>
              {this.props.reduxState.pars.map(par => 
                <tr key={par.id}>
                  <td value={par.id}>{par.description}</td>
                  <td>{par.monday_par}{this.renderInputField()}</td>
                  <td>{par.tuesday_par}{this.renderInputField()}</td>
                  <td>{par.wednesday_par}{this.renderInputField()}</td>
                  <td>{par.thursday_par}{this.renderInputField()}</td>
                  <td>{par.friday_par}{this.renderInputField()}</td>
                  <td>{par.saturday_par}{this.renderInputField()}</td>
                  <td>{par.sunday_par}{this.renderInputField()}</td>
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