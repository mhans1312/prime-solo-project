import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Select, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import classNames from 'classnames';
// import FormControl from '@material-ui/core/FormControl';

class AdminPage extends Component {
    
    state = {
        username: '',
        password: '',
    }

    componentDidMount(){
        this.getStores();
        this.getRole();
        this.getPerson();
      }
      
    getStores(){
    console.log('in getStore')
    this.props.dispatch({type: 'GET_STORES'})
    }

    getRole(){
        console.log('in getRole')
        this.props.dispatch({type: 'GET_ROLE'})
    }

    getPerson(){
        console.log('in getPerson')
        this.props.dispatch({type: 'GET_PERSON'})
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

      deleteProject = (personId) => {
        this.props.dispatch({type: 'DELETE_PERSON', payload: personId})
    }

    render(){
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <form>
                    <h3>Add User</h3>
                    <Input onChange={this.state.handleChange} value={this.state.username} 
                        name="username" placeholder="Username"/>
                    <Input onChange={this.state.handleChange} value={this.state.password}
                        name="password" placeholder="Password" />
                            <InputLabel>Select Role</InputLabel>
                    <Select onChange={this.handleInputRole} label="Select Role">
                        {/* <MenuItem name="role">Select Role</MenuItem> */}
                            {this.props.reduxState.role.map(role =>
                                <MenuItem key={role.id} value={role.id}>{role.role}</MenuItem>)}
                    </Select>
                    <InputLabel>Select Store</InputLabel>
                    <Select onChange={this.handleInputStore}>
                        {/* <MenuItem name="store" >Select Store</MenuItem> */}
                            {this.props.reduxState.stores.map(store =>
                        <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>)}
                    </Select><br/>

                </form>
                <h3>Manage Users</h3>
                <Table>
                    <TableHead style={{margin: 'auto'}}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.reduxState.person.map(person =>
                                <TableRow key={person.id}>
                                    <TableCell>{person.username}</TableCell>
                                    <TableCell></TableCell>
                                <TableCell><Button key={person.id} 
                                onClick={()=> this.deleteProject(person.id)}>DELETE</Button></TableCell>
                                <TableCell><Button>Edit</Button></TableCell>
                    </TableRow>)
                        }
                            
                     </TableBody>
                </Table>
            </div>
        </div>
        )
    }
}

const mapStateToProps = reduxState => ({reduxState});
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminPage);