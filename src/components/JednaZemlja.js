import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const JednaZemlja = ({name, flag, population, region, capital}) => {
  return (
    <Link to={`/JednaZemljaInfo/${name.toLowerCase()}`}>
        <div className={`country ${name.toLowerCase()}`}>
            <div className="flag_container">
                <img src={flag} alt={name} />
            </div>
            <div className="info_container">
                <h2><span>{name}</span></h2>
                <p>Population: <span>{population.toLocaleString()}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    </Link>
  );
}

export default JednaZemlja;