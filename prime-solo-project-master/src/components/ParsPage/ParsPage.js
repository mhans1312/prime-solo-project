import React, {Component} from 'react';
import { connect } from 'react-redux';

class ParsPage extends Component{

  state = {
    store: '',
    mode:'view',
    product_id: '',
    parNum: 0,
    parDay: '',
  }

  //populates the store selector on page load
  componentDidMount(){
    this.getStores();
    
  }

  componentWillMount(){
    this.refreshPars();
  }

  //handles the changes from the edit input field
  handleChange = (event) => {
    console.log('handleChange')
    this.setState({
      ...this.state,
      parNum: event.target.value,
      
  })
}

  //Gathers inputs and sends the PUT request to the database
  handleSave = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      mode: 'view',
    });
    console.log('the state store is ', this.state.store)
    this.props.dispatch({type: 'EDIT_PARS', payload: this.state});
    this.refreshPars();
  }

  //Toggles the edit button to a save button
  handleEdit = (parDay, product_id) => () => {
    this.setState({
      ...this.state,
      mode: 'edit' + product_id,
      product_id: product_id,
      parDay: parDay
    });
  }

  //Gets the list of stores from the database table
  getStores(event){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
  }

  refreshPars(){
    console.log('refreshPars stores is ', this.state.store)
    this.props.dispatch({type: 'GET_PARS', payload: this.state.store})
  }

  //Sets the store id for the page.
  handleInputStore = event => {
    
    this.props.dispatch({type: 'GET_PARS', payload: event.target.value})
    this.setState({
        ...this.state.store, store: event.target.value
    })
  }

  //renders the input fields after hitting the edit button
  renderInputField = (parDay, product_id) => {
    if(this.state.mode === 'edit' + product_id && parDay === this.state.parDay){
      return (
        <input size="5" onChange={this.handleChange}/>
      );
    }else{ 
      return<div></div>;  
      
    }
  }

  //renders the edit/save button
  renderButton = (parDay, product_id) => {
    if(this.state.mode === 'edit' + product_id && parDay === this.state.parDay){
      return (
        <button onClick={this.handleSave}>
        Save
        </button>
      );
    }else{
        return(
          <button onClick={this.handleEdit(parDay, product_id)}>
          Edit
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
        <form>
          <table style={{width: 700, margin: 'auto'}}>
            <thead>
              <tr style={{backgroundColor: '#2E4892', color: '#F8F000'}}>
                <th>Item</th>
                <th>Monday Par<br/>
                </th>
                <th>Tuesday Par<br/>
                </th>
                <th>Wednesday Par<br/>
                </th>
                <th>Thursday Par<br/>
                </th>
                <th>Friday Par<br/>
                </th>
                <th>Saturday Par<br/>
                </th>
                <th>Sunday Par<br/>
                </th>
              </tr>
            </thead>
            <tbody style={{width: 700}}>
              {this.props.reduxState.pars.map(par => 
                <tr key={par.id}>
                  <td value={par.id}>{par.description}</td>
                  <td>{par.monday_par}{this.renderInputField('monday_par', par.product_id)}{this.renderButton('monday_par', par.product_id)}</td>
                  <td>{par.tuesday_par}{this.renderInputField('tuesday_par', par.product_id)}{this.renderButton('tuesday_par', par.product_id)}</td>
                  <td>{par.wednesday_par}{this.renderInputField('wednesday_par', par.product_id)}{this.renderButton('wednesday_par', par.product_id)}</td>
                  <td>{par.thursday_par}{this.renderInputField('thursday_par', par.product_id)}{this.renderButton('thursday_par', par.product_id)}</td>
                  <td>{par.friday_par}{this.renderInputField('friday_par', par.product_id)}{this.renderButton('friday_par', par.product_id)}</td>
                  <td>{par.saturday_par}{this.renderInputField('saturday_par', par.product_id)}{this.renderButton('saturday_par', par.product_id)}</td>
                  <td>{par.sunday_par}{this.renderInputField('sunday_par', par.product_id)}{this.renderButton('sunday_par', par.product_id)}</td>
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