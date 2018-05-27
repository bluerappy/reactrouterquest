import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
      return (
            <div>
                <NavLink to="/"> HOME </NavLink>
                <NavLink to="/notre-histoire"
                    activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                        }}> History</NavLink>
            </div>
            );
        }
  }
  
  export default Navbar;