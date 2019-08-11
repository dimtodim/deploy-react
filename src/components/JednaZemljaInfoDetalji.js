import React from 'react';
import '../App2.css';

const JednaZemljaInfoDetalji = ({name, flag, nativeName, population, region, capital, topLevelDomain, currencies, languages, borders}) => {
  return (
    <div className="state-container">         
        <div className="flag-state">
            <img src={flag} alt={name} />
        </div>
        <div className="info-state">
            <h2><span>{name}</span></h2>
            <div className="main-section">
                <div className="part-one">
                    <p>Native Name: <span>{nativeName}</span></p>
                    <p>Population: <span>{population.toLocaleString()}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
                <div className="part-two">
                    <p>Top Level Domain: <span>{topLevelDomain[0]}</span></p>
                    <p>Currencies: <span>{currencies[0].name}, Symbol: {currencies[0].symbol}</span></p>
                    <p>Language: <span>{languages[0].name}</span></p>
                </div>
            </div>
                <div className="part-three">
                    <p>Border Countries: <span>{borders[0]}</span></p>
            </div>
        </div>
    </div>
  );
}

export default JednaZemljaInfoDetalji;