import React from 'react';
import './Searchpage.css';
import {Button} from "@material-ui/core";
import SearchResult from './SearchResult';

function Searchpage() {
 return (
  <div className="searchpage">
   <div className="searchpage__info">
     <p>62 stays - 26 august to 30 august - 2 guest</p>
     <h1>Stays Nearby</h1>
     <Button variant="outlined">Cancellation Flexibility</Button>
     <Button variant="outlined">Type of Place</Button>
     <Button variant="outlined">Price</Button>
     <Button variant="outlined">Rooms and beds</Button>
     <Button variant="outlined">Moro Filters</Button>

   </div>

   <SearchResult 
     img="https://a0.muscache.com/im/pictures/d7687f49-f936-4f25-a310-ed56b781d03a.jpg?im_w=480" location="Private room" title="Stay at this house for awsome experience" description="1 guest - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking - Washing machine" star={4.8} price="300 CZK / Night" total="1200 CZK total"  
     />
    <SearchResult 
     img="https://a0.muscache.com/im/pictures/d7687f49-f936-4f25-a310-ed56b781d03a.jpg?im_w=480" location="Private room" title="Stay at this house for awsome experience" description="1 guest - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking - Washing machine" star={4.8} price="300 CZK / Night" total="1200 CZK total"  
     />
     <SearchResult 
     img="https://a0.muscache.com/im/pictures/d7687f49-f936-4f25-a310-ed56b781d03a.jpg?im_w=480" location="Private room" title="Stay at this house for awsome experience" description="1 guest - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking - Washing machine" star={4.8} price="300 CZK / Night" total="1200 CZK total"  
     />


  </div>
 )
};

export default Searchpage;
