import React, {useEffect, useState} from 'react';
import JednaZemlja from './JednaZemlja';
import storage from 'local-storage-fallback';

const UbaciZemlje = () => {

    const [zemlje, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState(getInitialSelect);


    useEffect(() => {
        ucitavanjeljeZemlje();
    }, []);

    useEffect(()=>{
        storage.setItem('kontinent', JSON.stringify(select))
      },[select]);


    function getInitialSelect () {
        const savedSelect = storage.getItem('kontinent');
        return savedSelect ? JSON.parse(savedSelect) : "All";
      }

    const URL_link = `https://restcountries.eu/rest/v2/all`;

    const ucitavanjeljeZemlje = async () => {
        const data = await fetch (URL_link);
        const zemlje = await data.json();
        //console.log(zemlje);
        setItems(zemlje);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
        //console.log(search);
      }

    const updateSelect = (e) => {
        setSelect(e.target.value);
        //console.log(select);
    }
  
    
    const selectFilter = zemlje.filter((zemlja) => {
        const searchHit = (zemlja.name.toLowerCase().indexOf(search) === 0);
        const filterPass = ((select === 'All') || (zemlja.region === select));
        if ( searchHit && filterPass ) return true;
        return false;
      });

    return (
        
        <div className="container">

            <div className="search_bar">
                <div className="search_countries">
                    <input type="text" placeholder="Search by country..." value={search} onChange={updateSearch}/>
                </div>
                <div className="select_countries">
                    <select className="region" value={select} id="countries"onChange={updateSelect}>
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>  
                        <option value="Europe">Europe</option>  
                        <option value="Oceania">Oceania</option>  
                    </select>
                </div>
            </div>

            <div className="atlas">
                {
                    selectFilter.map(zemlja => (
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