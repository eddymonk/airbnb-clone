import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
 return (
    <div className="home">
       <Banner />

       <div className="home__section">
          <Card 
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320" title="Online Experiences" description="Unique activities we can do together, led by a world oh hosts." />
          <Card 
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=240"
            title="Unique place" description="Unique activities we can do together, led by a world oh hosts." />
          <Card 
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240" title="Entire Homes" description="Confortable private places, with room for friends and family." />

       </div>
       <div className="home__section">
          <Card 
            src="https://a0.muscache.com/im/pictures/038db8c6-f94c-4b5b-ba92-c5a5de86d31b.jpg?im_w=480" title="Penthhouse in Prague" description="Enjoy the amazing sights of Prague with this stunning penthouse" price="1530CZK/night" />
          <Card 
            src="https://a0.muscache.com/im/pictures/5400e17c-dd0b-4e30-abbd-ab3632f71939.jpg?im_w=480"
            title="3 Bedroom Flat in Prague" description="Superhost with stunning view of the river side of Prague" price="2580CZK/night" />
          <Card 
            src="https://a0.muscache.com/im/pictures/c888c44a-3b8c-47e6-a355-622c72a913fe.jpg?im_w=480" title="1 Bedroom apartment" description="Explore our cozy apartment in the centre of Prague" price="1200CZK/night" />
       </div>
    </div>
 )
};

export default Home;
