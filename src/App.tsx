import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardMui from "./Components/organism/CardMui";
import book1 from "./Components/Assets/book1.png";
import book2 from "./Components/Assets/book2.png";
import book3 from "./Components/Assets/book3.png";
import book4 from "./Components/Assets/book4.png";
import book5 from "./Components/Assets/book5.png";
import book6 from "./Components/Assets/book6.png";
import book7 from "./Components/Assets/book7.png";
import book8 from "./Components/Assets/book8.png";
import book9 from "./Components/Assets/book9.png";


function App() {

  const books= [
    {image:book1, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"},
    {image:book2, name:"Employee to Entrepreneur", author:"Steve Glaveski", time :"15-minute read"},
    {image:book3, name:`Doesn't Hurt to Ask`, author:"Trey Gowdy", time :"13-minute read"},
    {image:book4, name:"The Fate of Food", author:"Amanda Little", time :"12-minute read"},
    {image:book5, name:"Lives of the Stoics", author:"Ryan Holiday, Stephen Hansel", time :"13-minute read"},
    {image:book6, name:"Loving Your Business", author:"Debbie King", time :"13-minute read"},
    {image:book7, name:"The Lonely Century", author:"Noreena Hertz", time :"15-minute read"},
    {image:book8, name:"Eat Better, Feel Better", author:"Giada De Laurentiis", time :"13-minute read"},
    {image:book9, name:"Dropshipping", author:"James Moore", time :"12-minute read"}
  ];

  return (
    < >
    <CardMui details={books}/>
    </>
  );
}

export default App;
