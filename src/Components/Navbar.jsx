import {NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        
      <NavLink exact to="/" className="nav-link" activeStyle={{color: 'black'}}>
        Home
      </NavLink>
      <NavLink exact to="/People" className="nav-link" activeStyle={{color: 'black'}}>
        People
      </NavLink>
      <NavLink exact to="/Films" className="nav-link" activeStyle={{color: 'black'}}>
        Films
      </NavLink>
    </nav>
  );
};

export default Navbar;
