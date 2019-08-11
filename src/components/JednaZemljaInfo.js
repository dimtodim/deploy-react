import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import JednaZemljaInfoDetalji from './JednaZemljaInfoDetalji';
import '../App2.css';

function JednaZemljaInfo ({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [zemljaDetalji, setItem] = useState([]);

    const fetchItem = async () => {
      const data = await fetch (`https://restcountries.eu/rest/v2/name/${match.params.name}`);
      const zemljaDetalji = await data.json();
      setItem(zemljaDetalji);
    };

    return (
        <div className="container">
          <Link to="/"><button className="back"><span><i className="material-icons">arrow_back</i>Back</span></button></Link>
          {zemljaDetalji.map(zemlja => (
                  
                  <JednaZemljaInfoDetalji 
                  key={zemlja.alpha3Code}
                  name={zemlja.name}
                  flag={zemlja.flag}
                  nativeName={zemlja.nativeName}
                  population={zemlja.population}
                  region={zemlja.region}
                  capital={zemlja.capital}
                  topLevelDomain={zemlja.topLevelDomain}
                  currencies={zemlja.currencies}
                  languages={zemlja.languages}
                  borders={zemlja.borders}
                  />
               
              ))}
        </div>
      );

  }
    export default JednaZemljaInfo;
