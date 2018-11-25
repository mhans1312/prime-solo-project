import React, {Component} from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    
    state = {
        username: '',
        password: '',
    }

    componentDidMount(){
        this.getStores();
        this.getRole();
      }
      
    getStores(){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
    }

    getRole(){
        console.log('in getRole')
        this.props.dispatch({type: 'GET_ROLE'})
    }

    handleChange = event => {
        console.log('handleChange', event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleInputRole = event => {
        console.log('handleInputRole', event.target.value)
        this.setState({
            role: event.target.value
        })
    }

    handleInputStore = event => {
        console.log('handleInputStore', event.target.value)
        this.setState({
            store: event.target.value
        })
      }

    render(){
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h2>Manage Users</h2>
                <form>
                    <h3>Add User</h3>
                    <input onChange={this.state.handleChange} value={this.state.username} 
                        name="username" placeholder="Username"/>
                    <input onChange={this.state.handleChange} value={this.state.password}
                        name="password" placeholder="Password" />
                    <select onChange={this.handleInputRole}>
                        <option name="role" value="" selected disabled hidden>Select Role</option>
                            {this.props.reduxState.role.map(role =>
                                <option key={role.id} value={role.id}>{role.role}</option>)}
                    </select>
                    <select onChange={this.handleInputStore}>
                        <option name="store" value="" selected disabled hidden>Select Store</option>
                            {this.props.reduxState.stores.map(store =>
                        <option key={store.id} value={store.id}>{store.name}</option>)}
                    </select><br/>

                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminPage);