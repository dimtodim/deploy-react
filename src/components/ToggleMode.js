import React, {useEffect, useState} from 'react';
import {ThemeConsumer} from 'styled-components';
import storage from 'local-storage-fallback';

export function ToggleMode(defaultToggle = {toggle:false}) {

    const [toggle, setToggle] = useState(getInitialToggle);

    function getInitialToggle () {
        const savedToggle = storage.getItem('toggle');
        return savedToggle ? JSON.parse(savedToggle) : defaultToggle;
      }

      useEffect(()=>{
        storage.setItem('toggle', JSON.stringify(toggle))
      },[toggle]);

    const updateToggle = (e) => {
        setToggle(!toggle);
      }

return (
    
    <ThemeConsumer>
    {theme => (<button className={ toggle ? "theme" : "theme theme2"} onClick={e => {theme.setTheme(theme.mode === 'dark' ? {...theme, mode : 'light'} : {...theme, mode : 'dark'});(updateToggle())}}
    ><span><i className="material-icons">{toggle ? "brightness_4" : "brightness_5"}</i>{toggle ? "Dark Mode" : "Light Mode"}</span></button>)}
    </ThemeConsumer>

);
}

export default ToggleMode;