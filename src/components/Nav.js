import React from 'react';
import '../App.css';
import ToggleMode from '../components/ToggleMode';


function Nav() {
  return (
    <div>
        <nav>
        <div className="wrapper">
            <h1>Where in the world?</h1>
            <ToggleMode/>
        </div>
        </nav>
    </div>
  );
}

export default Nav;