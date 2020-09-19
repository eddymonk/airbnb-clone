import React, {useState} from 'react';
import './Search.css';


//Importo questi due file x il date picker
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

import {DateRangePicker} from 'react-date-range';
import {Button} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import {useHistory} from 'react-router-dom';

function Search() {

 const history = useHistory();

 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 const selectionRange = {
  startDate: startDate,
  endDate:endDate,
  key:"selection",
 };

 // Responsabile alla selezione della data, quando selezioni un giorno, imposta startDate in base a quale range hai selezionato, stessa cosa x endDate 
 function handleSelect(ranges) {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
 };

 return (
  <div className="search">
   <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
   <h2>Number of guest <PeopleIcon/></h2>
   <input min={0} defaultValue={2} type="number"/>
   <Button onClick={()=> history.push('/search')} >Search AirBnB</Button>
  </div>
 )
}

export default Search;
