import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Bagel Manager</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
        <Link className="nav-link" to="/admin">
        Admin
        </Link>
        </>
      )}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/commissary">
            Commissary Page
          </Link>
        </>
      )}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/order">
            Order Page
          </Link>
        </>
      )}
      {props.user.id && (
        <>
        <Link className="nav-link" to="/pars">
          Pars Page
        </Link>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
      <LogOutButton className="nav-link"/>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
