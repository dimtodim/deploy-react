import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import JednaZemlja from './JednaZemlja';

const UbaciZemlje = () => {

    const [zemlje, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        ucitaljeZemlje();
    }, []);

    const URL_link = `https://restcountries.eu/rest/v2/all`;

    const ucitaljeZemlje = async () => {
        const data = await fetch (URL_link);
        const zemlje = await data.json();
        //console.log(zemlje);
        setItems(zemlje);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
      }

    const getSearch = e => {
        e.preventDefault();
        setQuery(query);
    }



    const nadjiZemlju = zemlje.filter((zemlja) => {
        return zemlja.name.search !== -1;
    });
    
    return (
        
        <div className="container">
            <div className="search_countries">
                <input type="text" placeholder="Search by country..." value={search} onChange={updateSearch}/>
            </div>
            <div className="atlas">
                {nadjiZemlju.map(zemlja => (
                  
                    <JednaZemlja 
                    key={zemlja.alpha3Code}
                    name={zemlja.name}
                    flag={zemlja.flag}
                    population={zemlja.population}
                    region={zemlja.region}
                    capital={zemlja.capital}
                    />
                 
                ))}
            </div>
        </div>
    );
  }
  
  export default UbaciZemlje;