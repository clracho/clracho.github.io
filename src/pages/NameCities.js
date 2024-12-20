import React, { useState, useEffect} from 'react';
import Papa from 'papaparse';

import { trackPromise } from 'react-promise-tracker';

import USMap from '../components/USMap';
import LoadingIndicator from '../components/LoadingIndicator';

function NameCitiesPage () {
    const [cities, setCities] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [foundCities, setFoundCities] = useState([]);
    const [mapHeight, setMapHeight] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        let box = document.querySelector('.map_box');
        let height = box.offsetHeight;
        setMapHeight(height + "px");
        trackPromise(
            fetch('../uscities.csv')
              .then(async (res) => {
                const text = await res.text();
                const results = Papa.parse(text, { header: true });
                setCities(results.data);
              })
        );
      }
      fetchData();
    }, []);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (searchQuery !== "") {
        const results = cities.filter(city => city.city.toLowerCase() === (searchQuery.toLowerCase()));
        setSearchResults(results);
        for (const result of results) {
          if (foundCities.indexOf(result) === -1) {
            foundCities.push(result);
          }
        }
        foundCities.sort((a, b) => b.population - a.population);

        setSearchQuery("");  

        let box = document.querySelector('.map_box');
        let height = box.offsetHeight;
        setMapHeight(height + "px");
      }
    }
  
    return (
        <> <p>&nbsp;</p><p>&nbsp;</p>
        <h3 className="px-5"> The objective: name as many cities as possible</h3>
        <p></p>
        <div className="mx-auto">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for a city:</label>
            <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
        <div className="overflow-hidden pb-5">
          <div className="row py-3 px-4">
              <div className = "col-md-7 h-100">
                <div className = "border map_box">
              <USMap found_cities={foundCities} />
                </div>
              </div>
            <div className = "col-md-5">
              <div style={{height: mapHeight}} className="border overflow-scroll">
            {foundCities.length > 0 ? (
              <>
                <span>&emsp;Places found (<b>{foundCities.length}</b>):</span>
                <ul>
                  {foundCities.map(city => (
                    <li key={city.id}>
                      {city.city}, {city.state_id} | Population: {city.population}
                      <ul>
                        <li>
                        Coordinates: (<i>{city.lat}, {city.lng}</i>)
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
                  </>
                ) : (
                  <div>
                  <span>&emsp;No cities found</span>
                  <LoadingIndicator/>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
        


export default NameCitiesPage;